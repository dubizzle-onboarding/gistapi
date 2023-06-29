import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { CacheContext } from "../context/CacheContext";
import useDebounce from "../hooks/useDebounce";

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 8px;
`;

const Search = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [publicGists, setPublicGists] = useState([]);
  const { getGistForUser, getPublicGists, initialPublicGists } =
    useContext(CacheContext);
  const debouncedUsername = useDebounce(username, 500); 

  useEffect(() => {
    let isMounted = true; 
    const fetchData = async () => {
      try {
        setError(null); 

        let data;
        if (debouncedUsername !== "") {
          data = await getGistForUser(debouncedUsername);
        } else {
          if (!initialPublicGists) {
            if (isMounted) {
              data = initialPublicGists;
            }
          } else {
            data = await getPublicGists();
          }
        }

        if (isMounted) {
          setPublicGists(data);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    if (isMounted) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [debouncedUsername]);

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          type="text"
          placeholder="Search Gists for the username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputBox>
      {error && <ErrorText>{error}</ErrorText>}
      {publicGists &&
        publicGists.length > 0 &&
        publicGists.map((gist) => (
          <div key={gist.id}>
            <h3>{gist.description}</h3>
            <p>{gist.html_url}</p>
          </div>
        ))}
    </Wrapper>
  );
};

export default Search;

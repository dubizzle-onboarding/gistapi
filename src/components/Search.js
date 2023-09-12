import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { GistContext } from "../context/GistContext";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const { fetchGistByUser } = useContext(GistContext);

  useEffect(() => {
    let debounceTimer;
    
    clearTimeout(debounceTimer);
    
    debounceTimer = setTimeout(() => {
      fetchGistByUser(searchText);
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchText]);

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Gists for the username"
        />
      </InputBox>
    </Wrapper>
  );
};

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

export default Search;

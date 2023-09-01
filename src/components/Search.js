import React, { useState } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { useDispatch } from "react-redux";
import { setListOfGist } from "../redux/slices/gistSlice";
import { getGistForUser, getPublicGists } from "../services/gistService";
const Search = () => {
  const [serchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();

  const onChangeSearch = async (e) => {
    setSearchVal(e.target.value);
    // Search after 2 sec so the change event occur when user enter all the input
    debounce(getGistUser(e.target.value));
  };
  const getGistUser = async (username) => {
    try {
      /*
        If username is empty than call all of the gists api other getGistfor specific user api
        because when you search empty user in a specif user api it will gives an error
      */
      const list = username
        ? await getGistForUser(username)
        : await getPublicGists();
      dispatch(setListOfGist(list.data));
    } catch (error) {
      dispatch(setListOfGist([]));
      console.log("Error - Get gist by username", error);
    }
  };

  function debounce(func, timeout = 2000) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          value={serchVal}
          onChange={(e) => onChangeSearch(e)}
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

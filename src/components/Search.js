import React, { useContext } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { PageContext } from "../redux/PageContext";
import { PageContextKeys } from "../redux/keys";

const Search = () => {
  const { state, dispatch } = useContext(PageContext);
  // globally search name by context api state
  const { userName } = state;
  const searchInput = (e) => {
    dispatch({ type: PageContextKeys.userName, payload: e.target.value });
  };
  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          value={userName}
          onChange={searchInput}
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

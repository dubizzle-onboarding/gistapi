import React, { useState } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { connect } from "react-redux";
import { request as getPublicGists } from "../redux/actions/PublicGists";
import { debounce } from "lodash";

const Search = ({ getPublicGists }) => {
  const [value, setValue] = useState();

  const handleSearchChange = debounce((value) => {
    getPublicGists(value);
  }, 1000);

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            handleSearchChange(e.target.value);
          }}
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

const mapStateToProps = () => ({});

const mapDispatchToProps = { getPublicGists };

export default connect(mapStateToProps, mapDispatchToProps)(Search);

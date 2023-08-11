import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Octicon from 'react-octicon';
import { getGistForUser } from '../services/gistService';
import { debounce } from '../debounce';
import { useDispatch } from 'react-redux';
import { addAllGists } from '../store/gist/gistSlice';

const Search = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    async function getGistByName() {
      try {
        const singleGist = await getGistForUser(search);
        if (singleGist?.length) {
          dispatch(addAllGists(singleGist));
        }
      } catch (error) {
        console.log(error);
      }
    }
    getGistByName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          value={search}
          onChange={(e) => debounce(setSearch(e.target.value), 5000)}
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

import React from 'react'
import styled from 'styled-components'
// tslint:disable-next-line: no-var-requires
const Octicon = require('react-octicon')

/**
 * Displays search component used to search gists but username
 * @param props Props for Serach input. To get and set search values
 * @returns React component
 */
const Search = ({ search, setSearch }: { search: string; setSearch: (newVal: string) => void }) => {
  const handleChange = (e: any) => setSearch(e.target.value)
  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input placeholder="Search Gists for the username" value={search} onChange={handleChange} />
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`

export default Search

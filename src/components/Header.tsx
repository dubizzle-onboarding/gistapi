import React from 'react'
import styled from 'styled-components'
import Search from './Search'

// tslint:disable-next-line: no-var-requires
const Octicon = require('react-octicon')

/**
 * Displays header. Does not contain nav elements
 * @param props Props for Header. To set/get search value
 * @returns React component
 */
const Header = ({ search, setSearch }: { search: string; setSearch: (newVal: string) => void }) => (
  <Wrapper>
    <Octicon name="mark-github" mega={true} />
    <Search search={search} setSearch={setSearch} />
  </Wrapper>
)

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`

export default Header

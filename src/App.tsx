
import _ from 'lodash';
import React, { useState } from 'react';
import styled from 'styled-components'
import GistList from './components/GistList';
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";

const App = () => {

  const [search, setSearch] = useState('');

  return (
    <Wrapper className="App" data-testid="app">
      <Header search={search} setSearch={setSearch} />
      <GistList search={search} />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;

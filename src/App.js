import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import GistList from "./components/GistList";
import { CacheContext } from './context/CacheContext';
import GlobalStyles from "./GlobalStyle";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const App = () => {
  const [gists, setGists] = useState([]);
  const [cache, setCache] = useState({});
  const [initialPublicGists, setInitialPublicGists] = useState(null);

  const getPublicGists = async () => {
    const response = await octokit.gists.listPublic();
    const data = response.data;
    setGists(data);
    setInitialPublicGists(data); 
  };  

  useEffect(() => {
    getPublicGists();
  }, []);

  const getGistForUser = async (username) => {
    if (cache[username]) {
      setGists(cache[username]);
    } else {
      const response = await octokit.gists.listForUser({ username });
      const data = response.data;
      setCache({ ...cache, [username]: data });
      setGists(data);
    }
  };

  return (
    <CacheContext.Provider value={{ getGistForUser, getPublicGists, initialPublicGists }}>
      <Wrapper className="App" data-testid="app">
        <Header setGists={setGists} />
        <GistList gists={gists} />
        <GlobalStyles />
      </Wrapper>
    </CacheContext.Provider>
  );
}

export default App;

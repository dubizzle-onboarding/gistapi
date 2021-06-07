
import styled from 'styled-components'
import GistList from './components/GistList';
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";

const App = () => {
  return (
    <Wrapper className="App" data-testid="app">
      <Header />
      <GistList />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;

import styled from "styled-components";
import Header from "./components/Header";
import GistList from "./components/GistList";
import GlobalStyles from "./GlobalStyle";
import GistContextProvider from "./context/GistContext";

const App = () => {
  return (
    <Wrapper className="App" data-testid="app">
      <GistContextProvider>
        <Header />
        <GistList />
      </GistContextProvider>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;

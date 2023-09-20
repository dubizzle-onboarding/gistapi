
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";

const App = () => {
  return (
    <Wrapper className="App" data-testid="app">
      <Header />
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;

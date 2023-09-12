import React from "react";
import styled from "styled-components";
import Gist from "./Gist";

const Wrapper = styled.div`
  width: 100%;
  max-width: 50%;
  padding: 1rem;
  margin: 0 auto;
`;

const GistList = () => {
  return (
    <Wrapper>
      {Array(10)
        .fill()
        .map((gist) => (
          <Gist />
        ))}
    </Wrapper>
  );
};

export default GistList;

import React, { useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import Gist from "./Gist";
import { GistContext } from "../context/GistContext";

const GistList = () => {
  const { gists, loading, serverError, fetchAllGist } = useContext(GistContext);

  useEffect(() => {
    fetchAllGist();
  }, []);

  return (
    <Wrapper>
      {gists && gists.map((gist) => <Gist key={gist.id} gist={gist} />)}
      {loading && <Spinner />}
      {serverError && <Error>{serverError}</Error>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 50%;
  padding: 1rem;
  margin: 0 auto;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid black;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Error = styled.div`
  width:100%;
  background-color: #f44336;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export default GistList;

import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Gist from "./Gist";
import { GistContext } from "../context/GistContext";

const Wrapper = styled.div`
  width: 100%;
  max-width: 50%;
  padding: 1rem;
  margin: 0 auto;
`;

const GistList = () => {
  const { gists, loading, serverError, fetchAllGist } = useContext(GistContext);

  useEffect(() => {
    fetchAllGist();
  }, []);

  return (
    <Wrapper>
      {gists && gists.map((gist) => <Gist key={gist.id} gist={gist} />)}
      {loading && <span>Loading....</span>}
      {serverError && <span>{serverError}</span>}
    </Wrapper>
  );
};

export default React.memo(GistList);

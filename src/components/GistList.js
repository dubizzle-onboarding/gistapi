import React from 'react';
import styled from 'styled-components';
import Gist from './Gist';

const Wrapper = styled.div`
  padding: 16px;
`;

const GistList = ({ gists }) => {
  return (
    <Wrapper>
      {gists.map((gist) => (
        <Gist key={gist.id} gist={gist} />
      ))}
    </Wrapper>
  );
}

export default GistList;

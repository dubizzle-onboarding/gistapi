import React from 'react';
import styled from 'styled-components';

const GistCard = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
`;

const GistLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #0366d6;
  text-decoration: none;
`;

const GistMeta = styled.div`
  font-size: 14px;
  color: #586069;
  margin-top: 8px;
`;

const Gist = ({ gist }) => {
  return (
    <GistCard>
      <GistLink href={gist.html_url} target="_blank">
        {Object.keys(gist.files)[0]}
      </GistLink>
      <GistMeta>
        <span>{gist.owner?.login || "Anonymous"}</span>
        <span>{new Date(gist.created_at).toLocaleDateString()}</span>
      </GistMeta>
    </GistCard>
  );
}

export default Gist;

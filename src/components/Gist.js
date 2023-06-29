import React from 'react';
import styled from 'styled-components';
import Octicon from 'react-octicon';

const Gist = ({ gist }) => {
  const {
    owner,
    files,
    created_at: createdAt,
    updated_at: updatedAt,
    description,
  } = gist;

  return (
    <GistCard>
      <GistHeader>
        <OwnerSection>
          <OwnerImage src={owner?.avatar_url} alt={owner?.login} />
          <OwnerName>{owner?.login}</OwnerName>
        </OwnerSection>
        <StatsSection>
          <Stat>
            <Octicon name="code" />
            <StatText>
              {Object.keys(files).length}{' '}
              {Object.keys(files).length > 1 ? 'Files' : 'File'}
            </StatText>
          </Stat>
          <Stat>
            <Octicon name="repo-forked" />
            <StatText>Forks</StatText>
          </Stat>
          <Stat>
            <Octicon name="comment" />
            <StatText>Comments</StatText>
          </Stat>
          <Stat>
            <Octicon name="star" />
            <StatText>Stars</StatText>
          </Stat>
        </StatsSection>
      </GistHeader>
      <Timestamps>
        <Timestamp>Created: {formatDate(createdAt)}</Timestamp>
        <Timestamp>Updated: {formatDate(updatedAt)}</Timestamp>
      </Timestamps>
      <Description>{description}</Description>
      <FilesList>
        {Object.keys(files).map((fileName) => (
          <File key={fileName}>
            <Octicon name="file-text" />
            <FileNameLink href={files[fileName].raw_url} target="_blank">
              {fileName}
            </FileNameLink>
          </File>
        ))}
      </FilesList>
    </GistCard>
  );
};

const GistCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
`;

const GistHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const OwnerSection = styled.div`
  display: flex;
  align-items: center;
`;

const OwnerImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;

const OwnerName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #0366d6;
  margin: 0;
`;

const StatsSection = styled.div`
  display: flex;
  align-items: center;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const StatText = styled.span`
  margin-left: 4px;
  font-size: 14px;
  color: #586069;
`;

const Timestamps = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Timestamp = styled.p`
  font-size: 14px;
  color: #586069;
  margin-right: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  line-height: 1.5;
`;

const FilesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const File = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #0366d6;
  margin-bottom: 8px;
`;

const FileNameLink = styled.a`
  margin-left: 8px;
  text-decoration: none;
  color: #0366d6;

  &:hover {
    text-decoration: underline;
  }
`;

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US');
}

export default Gist;

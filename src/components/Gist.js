import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Octicon from "react-octicon";
import { formatDate } from "../utils/formatDate";

const Gist = ({ gist }) => {
  
  // Destructure the gist object
  const { owner, files, created_at, updated_at, description } = gist;

  return (
    <GistWrapper>
      <HeaderSection>
        <UserSection>
          <UserImage src={owner?.avatar_url} alt={owner?.login} />
          <UserName>{owner?.login}</UserName>
        </UserSection>
        <InfoContainer>
          <InfoItem>
            <Octicon name="code" />
            <InfoText>
              {Object.keys(files).length}{" "}
              {Object.keys(files).length > 1 ? "Files" : "File"}
            </InfoText>
          </InfoItem>
          <InfoItem>
            <Octicon name="repo-forked" />
            <InfoText>Forks</InfoText>
          </InfoItem>
          <InfoItem>
            <Octicon name="comment" />
            <InfoText>Comments</InfoText>
          </InfoItem>
          <InfoItem>
            <Octicon name="star" />
            <InfoText>Stars</InfoText>
          </InfoItem>
        </InfoContainer>
      </HeaderSection>
      <DateSection>
        <GistDate>Created: {formatDate(created_at)}</GistDate>
        <GistDate>Updated: {formatDate(updated_at)}</GistDate>
      </DateSection>
      <Description>{description}</Description>
      <FileContainer>
        {Object.keys(files).map((fileName) => (
          <FileItem key={fileName}>
            <Octicon name="file-text" />
            <FileLink href={files[fileName].raw_url} target="_blank">
              {fileName}
            </FileLink>
          </FileItem>
        ))}
      </FileContainer>
    </GistWrapper>
  );
};

const GistWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
`;

const HeaderSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-right: 0.5rem;
`;

const UserName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #0e72e3;
  margin: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: #0e72e3;
`;

const InfoText = styled.span`
  margin-left: 4px;
  font-size: 14px;
`;

const DateSection = styled.div`
  display: flex;
`;

const GistDate = styled.p`
  font-size: 12px;
  color: #84888c;
  margin-right: 0.5rem;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0 0 0.5rem 0;
`;

const FileContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FileItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #0e72e3;
  margin-bottom: 1.5rem;
`;

const FileLink = styled.a`
  margin-left: 0.5rem;
  text-decoration: none;
`;




Gist.propTypes = {
  gist: PropTypes.shape({
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
    files: PropTypes.objectOf(
      PropTypes.shape({
        raw_url: PropTypes.string,
      })
    ),
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default React.memo(Gist);

import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";

const Gist = ({ gist }) => {
  return (
    <GistWrapper>
      <HeaderSection>
        <UserSection>
          <UserImage
            src={"https://avatars.githubusercontent.com/u/32258466?v=4"}
            alt={"Image"}
          />
          <UserName>HamzaKhann</UserName>
        </UserSection>
        <InfoContainer>
          <InfoItem>
            <Octicon name="code" />
            <InfoText>3 Files</InfoText>
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
        <GistDate>Created at: 11/17/2020</GistDate>
        <GistDate>Last Updated: 11/17/2020</GistDate>
      </DateSection>
      <Description>Getting Started with Create React App</Description>
      <FileContainer>
        <FileItem>
          <Octicon name="file-text" />
          <FileLink href="">machine.js</FileLink>
        </FileItem>
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

export default Gist;

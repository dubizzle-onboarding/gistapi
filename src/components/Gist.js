import React from 'react';
import styled from 'styled-components';

const Gist = ({ data }) => (
  <MainContainer>
    <Card>
      <TopBar>
        <UserInfo>
          <UserImg src={data.owner.avatar_url} />
          <UserName>{data.owner.login}</UserName>
        </UserInfo>
        <GitInfo>
          <GitInfoItem href={data.commits_url}>{`<>${data.files ? Object.keys(data.files).length : 0} Files`}</GitInfoItem>
          <GitInfoItem href={data.forks_url}>Forks</GitInfoItem>
          <GitInfoItem href={data.comments_url}>Comments</GitInfoItem>
          <GitInfoItem href={data.owner.starred_url}>Stars</GitInfoItem>
        </GitInfo>
      </TopBar>
      <TopBar>
        <CreatedAt>
          Created At: {data.created_at.split('T')[0]} Last update: {data.updated_at.split('T')[0]}
        </CreatedAt>
      </TopBar>
      <Description>{data.files ? Object.keys(data.files).map((file) => <File>{file}</File>) : null}</Description>
    </Card>
  </MainContainer>
);

const File = styled.div`
  color: blue;
  font-size: 11px;
  padding-right: 10px;
`;

const Description = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
`;

const CreatedAt = styled.div`
  display: flex;
  font-size: 11px;
  margin-top: -5px;
`;

const GitInfoItem = styled.a`
  font-size: 12px;
`;

const GitInfo = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
`;

const UserName = styled.div`
  font-size: 12px;
  color: blue;
`;

const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;
const TopBar = styled.div`
  margin-bottom: 10px;
  display: flex;
`;
const Card = styled.div`
  width: 50%;
  padding-bottom: 20px;
  margin-top: 14px;
  border-bottom: 1px solid #f1f1f1;
`;
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Gist;

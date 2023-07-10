import styled from "styled-components";
import { MdCode, MdOutlineStar } from "react-icons/md";
import { BiGitRepoForked } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { BsFileEarmarkText } from "react-icons/bs";
import { formatDate } from "../utils";

const Gist = ({ gist }) => {
  const files = Object.keys(gist.files);

  return (
    <GistContainer>
      <Row isSpaceBetween>
        <Row>
          <ProfileIcon src={gist?.owner?.avatar_url} />
          <ProfileName href={gist?.owner?.html_url} target="_blank">
            {gist?.owner?.login}
          </ProfileName>
        </Row>
        <Row>
          <Link href={"#"}>
            <MdCode size={14} />
            <LinkName>{files.length}</LinkName>
            <LinkName>File</LinkName>
          </Link>
          <Link href={gist?.forks_url} target="_blank">
            <BiGitRepoForked size={12} />
            <LinkName>Forks</LinkName>
          </Link>
          <Link href={gist?.comments_url} target="_blank">
            <GoComment size={12} />
            <LinkName>Comments</LinkName>
          </Link>
          <Link href={gist?.owner?.starred_url} target="_blank">
            <MdOutlineStar size={12} />
            <LinkName>Stars</LinkName>
          </Link>
        </Row>
      </Row>
      <DateRow>
        <div style={{ marginRight: 4 }}>
          <span>Created at:</span>
          <span style={{ marginLeft: 2 }}>{formatDate(gist?.created_at)}</span>
        </div>
        <div style={{ marginLeft: 4 }}>
          <span>Last updated:</span>
          <span style={{ marginLeft: 2 }}>{formatDate(gist?.updated_at)}</span>
        </div>
      </DateRow>
      <Description>{gist?.description}</Description>
      <FileRow>
        {files.map((name, index) => (
          <Row key={`${name + index}`}>
            <FileIcon />
            <span>{name}</span>
          </Row>
        ))}
      </FileRow>
    </GistContainer>
  );
};

const GistContainer = styled.div`
  margin: auto;
  width: 50%;
  padding: 16px 0px 32px 0px;
  border-bottom: 1px solid #ccc;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ isSpaceBetween }) =>
    isSpaceBetween ? `space-between` : `center`};
`;
const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #1f6feb;
  margin: 0px 8px;
  font-size: 12px;
  text-decoration: none;
`;
const LinkName = styled.span`
  margin-left: 4px;
`;
const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
const ProfileName = styled.a`
  margin-left: 8px;
  color: #1f6feb;
  font-size: 13px;
  text-decoration: none;
`;
const DateRow = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 11px;
  margin-top: 4px;
`;
const Description = styled.p`
  font-size: 14px;
  color: #626465;
  word-wrap: break-word;
`;
const FileRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  color: #1f6feb;
  flex-wrap: wrap;
`;
const FileIcon = styled(BsFileEarmarkText)`
  margin-left: 12px;
  margin-right: 4px;
`;

export default Gist;

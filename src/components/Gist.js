import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Gist = ({gist,index}) => {
  return (
    <CardLayout style={index !== 0 ? { borderTop: "2px solid #eef0f1" } : {}}>
      <CardHeader>
        <div style={{ display: "flex" }}>
          <Icon
            src={gist.owner_avatar_url}
            width={20}
            height={20}
            alt={gist.owner_login}
          ></Icon>
          <ProfileLink style={{marginLeft:'3px !important'}} href={gist.url} target='_blank'>{gist.owner_login}</ProfileLink>
        </div>
        <div>
          <Link href={gist.commits_url} target="_blank">{`Files ${
            Object.keys(gist.files).length
          }`}</Link>
          <Link href={gist.forks_url} target="_blank">{`Forks`}</Link>
          <Link target="_blank" href={gist.comments_url}>{`Comments ${gist.comments}`}</Link>
          <Link target="_blank" href={gist.owner_starred_url}>{`Stars`}</Link>
        </div>
      </CardHeader>
      <CardCaption>
        <div>
          <span>Created at </span>
          <span>{gist.created_at.split("T")[0]}</span>
        </div>
        <div style={{ marginLeft: "5px" }}>
          <span>Last Date </span>
          <span>{gist.updated_at.split("T")[0]}</span>
        </div>
      </CardCaption>
      <CardBody>
        <Discription>
          <p>{gist.description}</p>
        </Discription>
        {Object.keys(gist.files).length ? (
          <Row>
            {Object.keys(gist?.files).map((item, index) => {
              return (
                <Link key={index} href={gist?.files[item].raw_url}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="10"
                    height="10"
                    viewBox="0 0 128 128"
                    target="_blank"
                  >
                    <path d="M 33.5 9 C 26.3 9 20.5 14.8 20.5 22 L 20.5 102 C 20.5 109.2 26.3 115 33.5 115 L 94.5 115 C 101.7 115 107.5 109.2 107.5 102 L 107.5 22 C 107.5 14.8 101.7 9 94.5 9 L 33.5 9 z M 33.5 15 L 94.5 15 C 98.4 15 101.5 18.1 101.5 22 L 101.5 102 C 101.5 105.9 98.4 109 94.5 109 L 33.5 109 C 29.6 109 26.5 105.9 26.5 102 L 26.5 22 C 26.5 18.1 29.6 15 33.5 15 z M 33.5 22 L 33.5 37 L 94.5 37 L 94.5 22 L 33.5 22 z M 37.5 51 C 35.8 51 34.5 52.3 34.5 54 C 34.5 55.7 35.8 57 37.5 57 L 88.5 57 C 90.2 57 91.5 55.7 91.5 54 C 91.5 52.3 90.2 51 88.5 51 L 37.5 51 z M 37.5 66 C 35.8 66 34.5 67.3 34.5 69 C 34.5 70.7 35.8 72 37.5 72 L 88.5 72 C 90.2 72 91.5 70.7 91.5 69 C 91.5 67.3 90.2 66 88.5 66 L 37.5 66 z M 37.5 81 C 35.8 81 34.5 82.3 34.5 84 C 34.5 85.7 35.8 87 37.5 87 L 64 87 C 65.7 87 67 85.7 67 84 C 67 82.3 65.7 81 64 81 L 37.5 81 z"></path>
                  </svg>{" "}
                  {gist?.files[item].filename}
                </Link>
              );
            })}
          </Row>
        ) : null}
      </CardBody>
    </CardLayout>
  );
};

export default Gist;
  
Gist.propTypes = {
  gist: PropTypes.exact({
    id: PropTypes.string,
    owner_login:PropTypes.string.isRequired,
    owner_avatar_url: PropTypes.string.isRequired,
    files: PropTypes.object.isRequired,
    forks_url: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    description: PropTypes.string,
    commits_url: PropTypes.string.isRequired,
    comments_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    owner_starred_url:PropTypes.string.isRequired
  }),
  index: PropTypes.number
};


const CardLayout = styled.div`
  width: 500px;
  margin-top: 20px;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
const Icon = styled.img`
  border-radius: 50%;
  margin-right: 5px;
`;

const Link = styled.a`
  margin-left: 10px;
  text-decoration: none;
  cursor:pointer
`;

const ProfileLink = styled.a`
  text-decoration: none;
  cursor:pointer
`;

const CardCaption = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10px;
  margin-top: 5px;
`;
const CardBody = styled.div`
  margin-top: 20px;
`;
const Discription = styled.div`
  font-size: 14px;
  overflow-wrap: break-word;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10px;
  margin-top: 5px;
`;

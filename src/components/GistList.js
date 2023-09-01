import React, { useEffect } from "react";
import { getPublicGists } from "../services/gistService";
import { useDispatch, useSelector } from "react-redux";
import { selectGists, setListOfGist } from "../redux/slices/gistSlice";
import Gist from "./Gist";
import styled from "styled-components";
const GistList = () => {
  let { gistList } = useSelector(selectGists); // Fetching the data from the store
  const dispatch = useDispatch(); //Dispatch function for redux so that we can update the state in the store

  const getListOfGist = async () => {
    try {
      const list = await getPublicGists(); //Fetch the Gists list from the API
      dispatch(setListOfGist(list?.data)); //Setting the data in a state
    } catch (error) {
      console.log("Error - Geting Gists List API", error);
    }
  };

  const getRelevantData = (item) => {
      return {
        id: item.id,
        owner_login: item.owner.login,
        owner_avatar_url: item.owner.avatar_url,
        files: item.files,
        forks_url: item.forks_url,
        comments: item.comments,
        created_at: item.created_at,
        updated_at: item.updated_at,
        description: item.description,
        commits_url: item.commits_url,
        comments_url: item.comments_url,
        owner_starred_url: item.owner.starred_url,
        commits_url:item.commits_url,
        comments_url:item.comments_url,
        url:item.url
      };
    
  };

  useEffect(() => {
    getListOfGist();
  }, []);

  return (
    <Wrapper>
      {gistList?.length ? (
        gistList.map((gist, index) => {
          gist = {...getRelevantData(gist)}
          return <Gist key={gist.id} index={index} gist={gist}></Gist>;
        })
      ) : (
        <div>
          {" "}
          <h1>Not Found</h1>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export default GistList;

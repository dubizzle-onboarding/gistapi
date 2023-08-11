import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPublicGists } from '../services/gistService';

import { addAllGists } from '../store/gist/gistSlice';
import Gist from './Gist';

const GistList = () => {
  const { allGists } = useSelector((state) => state.gist);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getAllGists() {
      try {
        const allGistsRes = await getPublicGists();
        console.log({ allGistsRes });
        if (allGistsRes?.data?.length) {
          dispatch(addAllGists(allGistsRes?.data));
        }
      } catch (error) {
        console.log({ error });
      }
    }
    getAllGists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   useEffect(() => {
  //     console.log({ allGists });
  //   }, [allGists]);

  return <div>{allGists?.length ? allGists.map((gist) => <Gist data={gist} />) : <div>No Gist Found</div>}</div>;
};

export default GistList;

import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../redux/PageContext";
import { getGistForUser, getPublicGists } from "../services/gistService";
import Gist from "./Gist";
const GistList = () => {
  // context API states
  const { state } = useContext(PageContext);
  const { userName } = state;
  const [loading, setLoading] = useState(false);
  const [count, setcount] = useState(0);
  const [gistList, setGistList] = useState([]);
  const gistListCalling = async () => {
    setLoading(true);
    try {
      const res = await getPublicGists();
      setGistList(res.data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const searchBaseCalling = async (userName) => {
    setLoading(true);
    try {
      const res = await getGistForUser(userName);
      setGistList(res.data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setcount((prevState) => prevState + 1);
  }, []);

  useEffect(() => {
    // gist list calling
    gistListCalling();
  }, []);

  useEffect(() => {
    // gist list calling by user name with bounce
    const getData = setTimeout(() => {
      if (userName) {
        searchBaseCalling(userName);
      } else {
        if (count > 0) {
          gistListCalling();
        }
      }
    }, [1000]);

    return () => clearTimeout(getData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {gistList.length > 0 && gistList.map((gist, ind) => <Gist gist={gist} />)}
    </div>
  );
};

export default GistList;

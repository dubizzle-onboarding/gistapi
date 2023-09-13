import React, { createContext, useState } from "react";
import { getPublicGists, getGistForUser } from "../services/gistService";
import { GistCache } from "../utils/cache";
let gistCache = GistCache();
export const GistContext = createContext();

const GistContextProvider = (props) => {
  const [gists, setGists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  // Fetch all public gist initially
  const fetchAllGist = async () => {
    setLoading(true);
    try {
      let response = await getPublicGists();
      setGists(response?.data);
      gistCache.set("all", response.data);
      setLoading(false);
    } catch (e) {
      let error = e.response && e.response.status === 404 ? "No Gist Found":"Some Server Error"
      setServerError(error);
      setLoading(false);
    }
  };

  // Fetch gist according to search keyword
  const fetchGistByUser = async (username) => {
    if (!username.trim()) {
      setGists(gistCache.get("all"));
      return;
    }
    let cachedGist = gistCache.get(username);
    if (cachedGist) {
      setGists(cachedGist);
      return;
    }
    try {
      let response = await getGistForUser(username);
      setGists(response?.data);
      gistCache.set(username, response.data);
    } catch (e) {
      let error = e.response && e.response.status === 404 ? "No Gist Found":"Some Server Error"
      setServerError(error);
    }
  };

  return (
    <GistContext.Provider
      value={{ gists, loading, serverError, fetchAllGist, fetchGistByUser }}
    >
      {props.children}
    </GistContext.Provider>
  );
};

export default GistContextProvider;

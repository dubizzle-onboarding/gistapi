import React, { useEffect } from "react";
import { connect } from "react-redux";
import Gist from "./Gist";
import NotFound from "./NotFound";
import Loader from "./Loader";
import { request as getPublicGists } from "../redux/actions/PublicGists";

const GistList = ({ publicGists, getPublicGists }) => {
  const { failure, isFetching, data } = publicGists;
  const fetchPublicGists = () => {
    getPublicGists();
  };

  useEffect(() => {
    fetchPublicGists();
  }, []);

  if (isFetching) return <Loader />;

  return (
    <>
      {!failure && !isFetching && data.length ? (
        data.map((gist) => <Gist key={gist.id} gist={gist} />)
      ) : (
        <NotFound />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  publicGists: state.publicGists,
});

const mapDispatchToProps = { getPublicGists };

export default connect(mapStateToProps, mapDispatchToProps)(GistList);

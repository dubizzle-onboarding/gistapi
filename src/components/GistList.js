import React, { useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/searchProvider";
import useFetch from "../hooks/useFetch";
import { getPublicGists } from "../services/gistService";
import Gist from "./Gist";
function GistList() {
	const [data, status] = useFetch(getPublicGists);
	const { searchResults, setSearchResults } = useContext(SearchContext);

	return (
		<ListWrapper>
			{searchResults?.length > 0
				? searchResults?.map((el) => <Gist gist={el} key={el.id} />)
				: status === "FULFILLED" &&
				  data?.map((el) => <Gist gist={el} key={el.id} />)}
		</ListWrapper>
	);
}

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
    max-width:600px;
    margin auto;
`;

export default GistList;

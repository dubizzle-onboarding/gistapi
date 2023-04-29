import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import useFetch from "../hooks/useFetch";
import { getGistForUser } from "../services/gistService";
import { SearchContext } from "../context/searchProvider";
import useDebounce from "../hooks/useDebounce";
const Search = () => {
	const [searchTerm, setSearchTerm] = useState(null);
	const debouncedValue = useDebounce(searchTerm, 500);
	const { searchResults, setSearchResults } = useContext(SearchContext);
	const [data, status] = useFetch(getGistForUser, debouncedValue);

	useEffect(() => {
		status === "FULFILLED" ? setSearchResults(data) : setSearchResults([]);
	}, [status, data]);

	return (
		<Wrapper>
			<InputBox>
				<Octicon name="search" />
				<Input
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
					placeholder="Search Gists for the username"
				/>
			</InputBox>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 8px;
	background-color: #ffffff;
	font-size: 14px;
	line-height: 1.5;
	border-radius: 6px;
	margin: 0 16px;
`;

const InputBox = styled.div`
	border-radius: 4px;
	display: flex;
	width: 400px;
`;

const Input = styled.input`
	border: none;
	width: 100%;
	font-size: 16px;

	&:focus {
		outline: 0;
	}
`;

export default Search;

import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
	const [searchResults, setSearchResults] = useState([]);
	return (
		<SearchContext.Provider value={{ searchResults, setSearchResults }}>
			{children}
		</SearchContext.Provider>
	);
}

import React, { useEffect, useState } from "react";

function useFetch(func, ...rest) {
	const [data, setData] = useState(null);
	const [status, setStatus] = useState("LOADING");
	useEffect(() => {
		fetch();
	}, [...rest]);

	async function fetch() {
		func(...rest)
			.then((res) => {
				setData(res?.data);
				setStatus("FULFILLED");
			})
			.catch((err) => {
				setData(err);
				setStatus("ERROR");
			});
	}

	return [data, status];
}

export default useFetch;

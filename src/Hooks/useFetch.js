import { useEffect, useState } from "react";

function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(async () => {
		try {
			if (!data) {
				const response = await fetch(url);
				const myData = await response.json();
				setData(myData);
			}
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}, [url]);

	return { data, loading, error };
}

export default useFetch;

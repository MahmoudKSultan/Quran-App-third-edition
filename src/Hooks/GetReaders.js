// import React from "react";
import { useEffect, useState } from "react";
let GetReaders = () => {
	const [Readers, setReaders] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(
			"https://qurani-api.herokuapp.com/api/reciters?fbclid=IwAR1z-Hd4ZHS8Wf967RNvusdLlDY4gcjJAPitUx3KgOd1YcIMiarRlmT3ei4"
		)
			.then((res) => res.json())
			.then((res) => {
				setReaders(res);
				setLoading(false);
			});
	}, []);
	return { Readers, loading };
};

export default GetReaders;

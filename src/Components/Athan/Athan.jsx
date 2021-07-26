import React, { useEffect, useState } from "react";
import FullTable from "./Table";

function Athan({ history }) {
	const [locationData, setLocationData] = useState({});
	useEffect(() => {
		fetch("https://ipapi.co/json/")
			.then((res) => res.json())
			.then((res) => setLocationData(res));
		console.log(locationData);
	}, []);
	return (
		<div className="athan">
			<FullTable />
		</div>
	);
}

export default Athan;

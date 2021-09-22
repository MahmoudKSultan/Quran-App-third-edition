import React, { useEffect, useState } from "react";
import FullTable from "./Table";
import Loading from "./../Loading/Loading";
import Title from "./../Title/Title";

function Athan({ history }) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (navigator.geolocation) {
			//check if geolocation is available
			navigator.geolocation.getCurrentPosition(function (position) {
				const lat = position.coords.latitude;
				const lon = position.coords.longitude;
				const month = Date().slice(8, 10);
				const year = Date().slice(11, 15);

				fetch(
					`https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}&method=2&${month}=04&year=${year}`
				)
					.then((res) => res.json())
					.then((res) => {
						if (!data) {
							setData(res.data);
						}
						setLoading(false);
					});
			});
		}
	}, []);

	return (
		<div className="athan">
			<Title title="مواقيت الصلاة" />
			{loading ? <Loading /> : <FullTable data={data} />}
		</div>
	);
}

export default Athan;

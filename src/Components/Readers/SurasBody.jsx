import React from "react";
import Title from "./../Title/Title";
import Loading from "./../Loading/Loading";
import "./style.css";
import useFetch from "./../../Hooks/useFetch";
import SurasComp from "./SurasComp";

function SurasBody({ id }) {
	const { data, loading, error } = useFetch(
		`https://qurani-api.herokuapp.com/api/reciters/${id}`
	);
	const suras = data && data;
	// const reader = data && {name: data.name, }
	let reader = { name: "", rewaya: "" };

	if (suras) {
		reader = { name: data.name, rewaya: data.rewaya };
	}

	return (
		<div className="surasBody">
			{loading ? (
				<Loading />
			) : (
				<React.Fragment>
					<div className="header">
						<Title title="قائمة السور الصوتية" />
						<div className="reader">
							<h3>{reader.name} </h3> <h3>-</h3> <h6>{reader.rewaya}</h6>
						</div>
					</div>
					<SurasComp suras={suras} />
				</React.Fragment>
			)}
		</div>
	);
}

export default SurasBody;

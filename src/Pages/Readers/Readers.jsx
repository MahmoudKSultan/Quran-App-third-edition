import React from "react";

import ReadersBox from "./../../Components/Readers/ReadersBox";
function Readers({ history }) {
	return (
		<div className="readers page">
			<ReadersBox history={history} />
		</div>
	);
}

export default Readers;

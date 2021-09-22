import React from "react";
import SurasBody from "./../../Components/Readers/SurasBody";
// import Popup from "./../../Components/Popup/Popup";
import Audio from "./../../Components/Audio/Audio";
import { Consumer } from "../../context";

function Suras({
	match: {
		params: { id },
	},
}) {
	return (
		<div className="suras page">
			<SurasBody id={id} />
			<Consumer>
				{({ playingSura }) =>
					playingSura && <Audio playingItem={playingSura} />
				}
			</Consumer>
		</div>
	);
}

export default Suras;

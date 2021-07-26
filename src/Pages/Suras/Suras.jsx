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
		<Consumer>
			{(value) => {
				return (
					<div className="suras page">
						<SurasBody
							id={id}
							addSuraToFavorites={value.addSuraToFavorites}
							favoriteSuras={value.favoriteSuras}
							surasPlaylist={value.surasPlaylist}
							addSuraToPlaylist={value.addItemToFavorites}
							playSura={value.playSura}
						/>
						{value.playingSura && <Audio playingItem={value.playingSura} />}
					</div>
				);
			}}
		</Consumer>
	);
}

{
	/* <Popup message="تمت الاذافة الى المفضلة" /> */
}
export default Suras;

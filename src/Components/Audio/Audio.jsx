import React from "react";
import "./Audio.css";
function Audio({ playingItem }) {
	return (
		<div className="audio ">
			<audio controls src={playingItem} autoPlay type="audio/mpeg"></audio>
		</div>
	);
}

export default Audio;

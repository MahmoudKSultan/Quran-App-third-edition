import React from "react";
import "./Popup.css";
function Popup({ message }) {
	return (
		<div className="pop-message" color="primary">
			<h3>{message}</h3>
		</div>
	);
}

export default Popup;

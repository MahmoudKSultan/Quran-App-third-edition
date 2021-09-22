import React from "react";
import "./Popup.css";
import ReactDOM from "react-dom";
function Popup({ message, open }) {
	if (!open) return null;
	return ReactDOM.createPortal(
		<div className="pop-message" color="primary">
			<h3>{message}</h3>
		</div>,
		document.querySelector("#portal")
	);
}

export default Popup;

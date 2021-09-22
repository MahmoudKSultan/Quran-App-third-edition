import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
function Navbar({ menuClick }) {
	return (
		<div className="nav">
			<MenuIcon
				fontSize="large"
				color="secondary"
				onClick={menuClick}
				className="menu"
			/>
			<Link to="/readers">
				<h2>الرئيسية</h2>
			</Link>
		</div>
	);
}

export default Navbar;

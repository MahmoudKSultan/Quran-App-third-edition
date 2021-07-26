import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
function Navbar() {
	return (
		<div className="nav">
			<Container>
				<Grid container justify="space-between">
					<Grid item>
						<ul>
							<li>
								<Link to="/readers">القراء</Link>
							</li>
							<li>
								<Link to="/iza3a">الإذاعة</Link>
							</li>
							<li>
								<Link to="/quran">القرءان الكريم</Link>
							</li>
							<li>
								<Link to="/favorites">المفضلة</Link>
							</li>
						</ul>
					</Grid>
					<Grid item>الموقع الشامل</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Navbar;

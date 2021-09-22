import { Grid } from "@material-ui/core";
import React from "react";
import Title from "./../../Components/Title/Title";

import "./Favorites.css";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import getData from "./arrayOfGrids";

function Favorites() {
	return (
		<div className="favorites page">
			<Title title="المفضلة" />
			<div className="box">
				<h4>اختر المفضلة التي تود ان تذهب اليها</h4>
				<Consumer>
					{(value) => {
						const data = [
							...getData(
								value.favoriteReaders.length,
								value.favoriteSuras.length,
								value.favoriteIzaas.length
							),
						];
						return (
							<Grid container spacing={5}>
								{data.map((obj) => {
									return (
										<Grid item md={4} sm={6} xs={12} key={obj.name}>
											<Link to={obj.path}>
												<div className="grid-box">
													<h4>{obj.name}</h4>
													<div className="icon">
														<span className="number">{obj.count}</span>
														{obj.icon}
													</div>
												</div>
											</Link>
										</Grid>
									);
								})}
							</Grid>
						);
					}}
				</Consumer>
			</div>
		</div>
	);
}

export default Favorites;

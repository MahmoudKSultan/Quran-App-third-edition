import React from "react";
import Title from "../../Title/Title";
import "../style.css";
import { Grid } from "@material-ui/core";
import { Consumer } from "../../../context";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
function FavSuras(props) {
	return (
		<div className="favReaders">
			<Title title="السور المفضلة" />
			<div className="favBox">
				<Consumer>
					{({ favoriteSuras, deleteFromFavorite }) => {
						return (
							<Grid container spacing={5}>
								{favoriteSuras.map((sura) => {
									return (
										<Grid item md={4} sm={6} xs={12} key={sura.id}>
											<div className="grid-box">
												<div className="box-title">
													<div className="reader-name">
														<h3>{sura.name}</h3>
													</div>
													<div className="rewaya-name">
														{/* <h5>{reader.rewaya}</h5> */}
													</div>
												</div>
												<div className="icon">
													<DeleteIcon
														onClick={(event) => {
															deleteFromFavorite(sura, "favoriteSuras");
															event.stopPropagation();
														}}
													/>
												</div>
											</div>
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

export default FavSuras;

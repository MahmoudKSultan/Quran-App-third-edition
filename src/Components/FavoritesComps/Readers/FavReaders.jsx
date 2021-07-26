import React from "react";
import Title from "../../Title/Title";
import "../style.css";
import { Grid } from "@material-ui/core";
import { Consumer } from "../../../context";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
function FavReaders(props) {
	const goToLink = (id) => {
		props.history.push(`/readers/${id}`);
	};
	return (
		<div className="favReaders">
			<Title title="القراء المفضلين" />
			<div className="favBox">
				<Consumer>
					{({ favoriteReaders, deleteFromFavorite }) => {
						return (
							<Grid container spacing={5}>
								{favoriteReaders.map((reader) => {
									return (
										<Grid item md={4} sm={6} xs={12} key={reader.id}>
											<div
												className="grid-box"
												onClick={() => goToLink(reader.id)}
											>
												<div className="box-title">
													<div className="reader-name">
														<h3>{reader.name}</h3>
													</div>
													<div className="rewaya-name">
														<h5>{reader.rewaya}</h5>
													</div>
												</div>
												<div className="icon">
													<DeleteIcon
														onClick={(event) => {
															deleteFromFavorite(reader, "favoriteReaders");
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

export default FavReaders;

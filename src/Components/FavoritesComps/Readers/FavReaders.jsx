import { useState } from "react";
import Title from "../../Title/Title";
import "../style.css";
import { Grid } from "@material-ui/core";
import { Consumer } from "../../../context";
import DeleteIcon from "@material-ui/icons/Delete";
import Popup from "./../../Popup/Popup";

function FavReaders(props) {
	const [isOpen, setIsOpen] = useState(false);
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
															event.stopPropagation();
															deleteFromFavorite(
																"name",
																reader.name,
																"favoriteReaders"
															);
															setIsOpen(true);
															setTimeout(() => {
																setIsOpen(false);
															}, 2500);
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
			<Popup message="تم حذف القارئ من المفضلة" open={isOpen} />
		</div>
	);
}

export default FavReaders;

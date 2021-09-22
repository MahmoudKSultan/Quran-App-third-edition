import React, { useState } from "react";
import Title from "../../Title/Title";
import "../style.css";
import { Grid } from "@material-ui/core";
import { Consumer } from "../../../context";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Audio from "./../../Audio/Audio";
import Popup from "./../../Popup/Popup";

function FavIzaas(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [playingIzaa, setPlayingIzaa] = useState("");
	return (
		<div className="favReaders">
			<Title title="الاذاعات المفضلة" />
			<div className="favBox">
				<Consumer>
					{({ favoriteIzaas, deleteFromFavorite }) => {
						return (
							<>
								<Grid container spacing={5}>
									{favoriteIzaas.map((izaa, idx) => {
										return (
											<Grid
												item
												md={4}
												sm={6}
												xs={12}
												key={`${izaa.radio_url}`}
											>
												<div className="grid-box">
													<div className="box-title">
														<div className="reader-name">
															<h4 style={{ color: "white" }}>{izaa.name}</h4>
														</div>
													</div>
													<div className="icon">
														<PlayCircleOutlineIcon
															onClick={() => setPlayingIzaa(izaa.radio_url)}
														/>
														<DeleteIcon
															onClick={(event) => {
																deleteFromFavorite(
																	"radio_url",
																	izaa.radio_url,
																	"favoriteIzaas"
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
								<Audio playingItem={playingIzaa || ""} />
							</>
						);
					}}
				</Consumer>
			</div>
			<Popup message="تم حذف الاذاعة من المفضلة" open={isOpen} />
		</div>
	);
}

export default FavIzaas;

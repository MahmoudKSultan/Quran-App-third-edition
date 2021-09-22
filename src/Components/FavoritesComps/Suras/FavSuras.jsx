import React, { useState } from "react";
import Title from "../../Title/Title";
import "../style.css";
import { Grid } from "@material-ui/core";
import { Consumer } from "../../../context";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Audio from "./../../Audio/Audio";
import Popup from "./../../Popup/Popup";

function FavSuras(props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="favReaders">
			<Title title="السور المفضلة" />
			<div className="favBox">
				<Consumer>
					{({
						favoriteSuras,
						deleteFromFavorite,
						playingSura,
						playSura,
						resetPlayingSura,
					}) => {
						return (
							<>
								<Grid container spacing={5}>
									{favoriteSuras.map((fullSuraInfo, idx) => {
										console.log(fullSuraInfo);
										return (
											<Grid
												item
												md={4}
												sm={6}
												xs={12}
												key={`${fullSuraInfo.readerName}${fullSuraInfo.name}`}
											>
												<div className="grid-box">
													<div className="box-title">
														<div className="reader-name">
															<h3>{fullSuraInfo.name}</h3>
															<h5>{fullSuraInfo.readerName}</h5>
														</div>
													</div>
													<div className="icon">
														<PlayCircleOutlineIcon
															onClick={() => {
																resetPlayingSura();
																playSura(fullSuraInfo.url);
															}}
														/>
														<DeleteIcon
															onClick={(event) => {
																deleteFromFavorite(
																	"url",
																	fullSuraInfo.url,
																	"favoriteSuras"
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
								{playingSura && <Audio playingItem={playingSura} />}
							</>
						);
					}}
				</Consumer>
			</div>
			<Popup message="تم حذف السورة من المفضلة" open={isOpen} />
		</div>
	);
}

export default FavSuras;

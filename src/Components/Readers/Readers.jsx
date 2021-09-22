import { useState } from "react";
import { Grid } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MicNoneIcon from "@material-ui/icons/MicNone";
import { Consumer } from "../../context";
import ResultMessage from "../ResultMessage/ResultMessage";
import Popup from "./../Popup/Popup";
function Readers({ readers, history }) {
	const [isOpen, setIsOpen] = useState(false);

	const goToLink = (id) => {
		history.push(`/readers/${id}`);
	};

	return (
		<>
			<Consumer>
				{({ favoriteReaders, addItemToFavorites, resetPlayingSura }) => {
					return (
						<Grid container spacing={3}>
							{readers.length === 0 ? (
								<ResultMessage text="لا يوجد نتائج لعملية البحث!" />
							) : (
								readers.map((reader) => {
									return (
										<Grid
											item
											lg={4}
											sm={6}
											xs={12}
											className="grid"
											key={reader.id}
										>
											<div
												className="box"
												onClick={() => {
													resetPlayingSura();
													goToLink(reader.id);
												}}
											>
												<div className="names">
													<h3>{reader.name}</h3>
													<h5>{reader.rewaya}</h5>
												</div>
												<div
													className="icons"
													onClick={(event) => {
														event.stopPropagation();
														addItemToFavorites(reader, "favoriteReaders");
													}}
												>
													<div className="like">
														{favoriteReaders.find((r) => r.id === reader.id) ? (
															<FavoriteIcon />
														) : (
															<FavoriteBorderIcon
																onClick={() => {
																	setIsOpen(true);
																	setTimeout(() => {
																		setIsOpen(false);
																	}, 2500);
																}}
															/>
														)}
													</div>
													<div className="record">
														<MicNoneIcon />
														<div className="record-name">
															<h5>{reader.count}</h5>
														</div>
													</div>
												</div>
											</div>
										</Grid>
									);
								})
							)}
						</Grid>
					);
				}}
			</Consumer>
			<Popup message="تم اضافة القارئ إلى المفضلة" open={isOpen} />
		</>
	);
}

export default Readers;

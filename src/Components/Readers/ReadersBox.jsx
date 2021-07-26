import React, { useState } from "react";
import "./style.css";
import GetReaders from "./../../Hooks/GetReaders";
import Loading from "./../Loading/Loading";
import { Grid, TextField, makeStyles } from "@material-ui/core";
// import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MicNoneIcon from "@material-ui/icons/MicNone";
import Title from "../Title/Title";
import { Consumer } from "../../context";

const useStyles = makeStyles((theme) => ({
	textField: {
		// borderBottom: "3px solid rgba(255, 255, 255, 0.5)",
		color: "rgba(255, 255, 255, 0.5)",
		// borderImage: "linear-gradient(to left, #f88b7f, #e71f65) 1 100%",
	},
}));
function ReadersBox({ history }) {
	const classes = useStyles();
	const { Readers, loading } = GetReaders();

	// on link click
	const goToLink = (id) => {
		history.push(`/readers/${id}`);
	};

	const [searchValue, setSearchValue] = useState("");
	return (
		<React.Fragment>
			{loading ? (
				<Loading />
			) : (
				<Consumer>
					{({ favoriteReaders, addItemToFavorites, resetPlayingSura }) => {
						return (
							<div className="readersBox">
								<Title title="قائمة القراء" />
								<div className="readersHeader">
									<form noValidate autoComplete="off">
										<TextField
											className={classes.textField}
											id="standard-basic"
											label="  ابحث عن قارئ أو الرواية"
											color="secondary"
											onChange={(event) => setSearchValue(event.target.value)}
										/>
									</form>
								</div>
								<Grid container spacing={3}>
									{Readers.filter((reader) => {
										if (searchValue === "") return reader;
										else if (
											reader.name.includes(searchValue) ||
											reader.rewaya.includes(searchValue)
										)
											return reader;
									}).map((reader) => {
										return (
											<Grid
												item
												md={4}
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
															{favoriteReaders.find(
																(r) => r.id === reader.id
															) ? (
																<FavoriteIcon />
															) : (
																<FavoriteBorderIcon />
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
									})}
								</Grid>
							</div>
						);
					}}
				</Consumer>
			)}
		</React.Fragment>
	);
}

export default ReadersBox;

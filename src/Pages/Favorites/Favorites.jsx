import { Grid } from "@material-ui/core";
import React from "react";
import Title from "./../../Components/Title/Title";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import RadioIcon from "@material-ui/icons/Radio";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import "./Favorites.css";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
function Favorites() {
	return (
		<div className="favorites page">
			<Title title="المفضلة" />
			<h4>اختر المفضلة التي تود ان تذهب اليها</h4>
			<div className="box">
				<Consumer>
					{(value) => {
						return (
							<Grid container spacing={5}>
								<Grid item md={4} sm={6} xs={12}>
									<Link to="/favorites/readers">
										<div className="grid-box">
											<h4>القراء </h4>
											<div className="icon">
												<span className="number">
													{value.favoriteReaders.length}
												</span>
												<RecordVoiceOverIcon />
											</div>
										</div>
									</Link>
								</Grid>
								<Grid item md={4} sm={6} xs={12}>
									<Link to="/favorites/suras">
										<div className="grid-box">
											<h4>السور</h4>
											<div className="icon">
												<span className="number">
													{value.favoriteSuras.length}
												</span>
												<EqualizerIcon />
											</div>
										</div>
									</Link>
								</Grid>

								<Grid item md={4} sm={6} xs={12}>
									<Link to="/favorites/izaas">
										<div className="grid-box">
											<h4>الاذاعات</h4>{" "}
											<div className="icon">
												<span className="number">
													{value.favoriteIzaas.length}
												</span>
												<RadioIcon />
											</div>
										</div>
									</Link>
								</Grid>
							</Grid>
						);
					}}
				</Consumer>
			</div>
		</div>
	);
}

export default Favorites;

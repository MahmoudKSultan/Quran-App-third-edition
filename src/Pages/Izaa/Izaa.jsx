import Icons from "./Icons";
import { Grid } from "@material-ui/core";
import Title from "../../Components/Title/Title";
import Audio from "./../../Components/Audio/Audio";
import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import "./Izaa.css";
import { Consumer } from "../../context";
function Izaa() {
	const [izaas, setIzaas] = useState(null);
	const [playingIzaa, setPlayingIzaa] = useState("");
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("http://api.mp3quran.net/radios/radio_arabic.json")
			.then((res) => res.json())
			.then((res) => {
				setIzaas(res.radios);
				setLoading(false);
			});
	}, []);

	const playIzaa = (izaa) => setPlayingIzaa(izaa);

	return (
		<div className="izaa">
			{loading ? (
				<Loading />
			) : (
				<Consumer>
					{(value) => {
						return (
							<React.Fragment>
								<Title title="الإذاعة" />
								<div className="izaasBox">
									<Grid container spacing={5}>
										{izaas.map((izaa) => {
											return (
												<Grid item md={6} xs={12} key={izaa.radio_url}>
													<div className="izaaBox">
														<div className="izaa-name">
															<h4>{izaa.name.replaceAll("-", " ")}</h4>
														</div>
														<div className="icons">
															<PlayCircleOutlineIcon
																onClick={() => playIzaa(izaa)}
															/>
															<Icons
																izaa={izaa}
																addIzaaToFavorites={value.addItemToFavorites}
																favoriteIzaas={value.favoriteIzaas}
															/>
														</div>
													</div>
												</Grid>
											);
										})}
									</Grid>
								</div>
								{playingIzaa && <Audio playingItem={playingIzaa.radio_url} />}
							</React.Fragment>
						);
					}}
				</Consumer>
			)}
		</div>
	);
}

export default Izaa;

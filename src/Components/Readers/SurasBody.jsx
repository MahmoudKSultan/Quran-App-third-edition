import React from "react";
import { useState, useEffect } from "react";
import Title from "./../Title/Title";
import Loading from "./../Loading/Loading";
import "./style.css";
import { Grid } from "@material-ui/core";
import Icons from "./Icons";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

function SurasBody({
	id,
	addSuraToFavorites,
	favoriteSuras,
	surasPlaylist,
	addSuraToPlaylist,
	playSura,
}) {
	const [loading, setLoading] = useState(true);
	const [reader, setReader] = useState({});
	const [Suras, setSuras] = useState([]);

	useEffect(() => {
		fetch(`https://qurani-api.herokuapp.com/api/reciters/${id}`)
			.then((res) => res.json())
			.then((res) => {
				setReader({ name: res.name, rewaya: res.rewaya });
				setSuras(res.surasData);
				setLoading(false);
			});
	}, [id]);
	return (
		<div className="surasBody">
			{loading ? (
				<Loading />
			) : (
				<React.Fragment>
					<div className="header">
						<Title title="قائمة السور الصوتية" />
						<div className="reader">
							<h3>{reader.name} </h3> <h3>-</h3> <h6>{reader.rewaya}</h6>
						</div>
					</div>
					<div className="surasBox">
						<Grid container spacing={5}>
							{Suras.map((sura) => {
								return (
									<Grid item md={4} sm={6} xs={12} key={sura.id}>
										<div className="grid-box">
											<h4 className="sura-name">{sura.name}</h4>
											<h6 className="icon">
												<div
													className="play"
													onClick={() => {
														playSura(sura.url);
													}}
												>
													<PlayCircleOutlineIcon />
												</div>
												<Icons
													sura={sura}
													reader={reader}
													addSuraToFavorites={addSuraToFavorites}
													favoriteSuras={favoriteSuras}
													addSuraToPlaylist={addSuraToPlaylist}
													surasPlaylist={surasPlaylist}
												/>
											</h6>
										</div>
									</Grid>
								);
							})}
						</Grid>
					</div>
				</React.Fragment>
			)}
		</div>
	);
}

export default SurasBody;

import React, { lazy, Suspense } from "react";
import { Grid } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Consumer } from "../../context";

function Izaas({ izaas, playIzaa, setData }) {
	const Icons = lazy(() => import("./Icons"));
	return (
		<Consumer>
			{({ addItemToFavorites, favoriteIzaas }) => (
				<Grid container spacing={5}>
					{izaas.map((izaa) => {
						return (
							<Grid item md={6} xs={12} key={izaa.radio_url}>
								<div className="izaaBox">
									<div className="izaa-name">
										<h4>{izaa.name.replaceAll("-", " ")}</h4>
									</div>
									<div className="icons">
										<PlayCircleOutlineIcon onClick={() => playIzaa(izaa)} />
										<Suspense fallback={<small>loading...</small>}>
											<Icons
												izaa={izaa}
												addIzaaToFavorites={addItemToFavorites}
												favoriteIzaas={favoriteIzaas}
												inFav={favoriteIzaas.find(
													(i) => i.radio_url === izaa.radio_url
												)}
												setData={setData}
											/>
										</Suspense>
									</div>
								</div>
							</Grid>
						);
					})}
				</Grid>
			)}
		</Consumer>
	);
}

export default Izaas;

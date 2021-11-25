import React, { lazy, Suspense, useState } from "react";
import { Consumer } from "../../context";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Grid } from "@material-ui/core";
import search from "./../../utils/search";
import Form from "./Form";

function SurasComp({ suras }) {
	// lazy importing comps
	const Icons = lazy(() => import("./Icons"));
	const Loading = lazy(() => import("./../Loading/Loading"));
	const ResultMessage = lazy(() => import("./../ResultMessage/ResultMessage"));

	const [searchValue, setSearchValue] = useState("");
	const [loading, setLoading] = useState(false);
	let searchedSuras = search(suras.surasData, searchValue, "name");

	return (
		<div>
			<Form
				label="ابحث عن سورة معينة"
				setSearchValue={setSearchValue}
				setLoading={setLoading}
			/>
			<Consumer>
				{(value) => {
					return (
						<>
							{loading ? (
								<Suspense>
									<Loading />
								</Suspense>
							) : (
								<>
									{searchedSuras.length == 0 ? (
										<Suspense>
											<ResultMessage
												color="red"
												message="لا توجد نتائج لعملية البحث"
											/>
										</Suspense>
									) : (
										<div className="surasBox">
											<Grid container spacing={5}>
												{searchedSuras.map((sura) => {
													return (
														<Grid item md={4} sm={6} xs={12} key={sura.id}>
															<div className="grid-box">
																<h4 className="sura-name">{sura.name}</h4>
																<h6 className="icon">
																	<div
																		className="play"
																		onClick={() => value.playSura(sura.url)}
																	>
																		<PlayCircleOutlineIcon />
																	</div>
																	<Suspense>
																		<Icons
																			sura={sura}
																			reader={{
																				name: suras.name,
																				rewaya: suras.rewaya,
																			}}
																			addSuraToFavorites={
																				value.addSuraToFavorites
																			}
																			favoriteSuras={value.favoriteSuras}
																		/>
																	</Suspense>
																</h6>
															</div>
														</Grid>
													);
												})}
											</Grid>
										</div>
									)}
								</>
							)}
						</>
					);
				}}
			</Consumer>
		</div>
	);
}

export default SurasComp;

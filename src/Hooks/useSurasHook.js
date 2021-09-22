// import React from "react";
import { useState } from "react";

function useSurasHook() {
	let [favoriteSuras, setFavoriteSuras] = useState(
		JSON.parse(localStorage.getItem("favoriteSuras")) || []
	);
	let [playListSuras, setPlayList] = useState([]);

	const handleLike = (sura) => {
		const updatedFavorites = [...favoriteSuras, sura];
		setFavoriteSuras(updatedFavorites);
	};

	const handleAddToPlayList = (sura) => {
		playListSuras = [...playListSuras, sura];
		setFavoriteSuras(playListSuras);
	};

	return { favoriteSuras, handleLike, playListSuras, setPlayList };
}

export default useSurasHook;

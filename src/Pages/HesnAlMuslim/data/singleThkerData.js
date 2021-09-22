import { useState } from "react";
import useFetch from "./../../../Hooks/useFetch";

const GetThkerData = (id) => {
	const thkerID = id;
	const [playingAudio, setPlayingAudio] = useState("");
	const strID =
		thkerID.length == 3
			? +thkerID + 1
			: thkerID.length == 2
			? "0" + (+thkerID + 1)
			: "00" + (+thkerID + 1);

	const url = `http://server12.mp3quran.net/hm/ar_7esn_AlMoslem_by_Doors_${strID}.mp3`;
	const { data, loading, error } = useFetch(
		`http://www.mp3quran.net/api/husn/ar/${thkerID}.json`
	);
	const dataArray = data && data[Object.keys(data)[0]];

	return {
		data,
		loading,
		error,
		url,
		dataArray,
		setPlayingAudio,
		playingAudio,
	};
};

export default GetThkerData;

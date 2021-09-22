import Title from "../../Components/Title/Title";
import Audio from "./../../Components/Audio/Audio";
import { useState } from "react";
import Loading from "../../Components/Loading/Loading";
import "./Izaa.css";
import useFetch from "./../../Hooks/useFetch";
import IzaasContainer from "./IzaasContainer";
function Izaa() {
	const [playingIzaa, setPlayingIzaa] = useState("");
	const { data, loading, error } = useFetch(
		"http://api.mp3quran.net/radios/radio_arabic.json"
	);

	return (
		<div className="izaa">
			{loading ? (
				<Loading />
			) : (
				<>
					<Title title="الإذاعة" />
					<IzaasContainer radios={data.radios} playIzaa={setPlayingIzaa} />
					<Audio playingItem={playingIzaa.radio_url || ""} />
				</>
			)}
		</div>
	);
}

export default Izaa;

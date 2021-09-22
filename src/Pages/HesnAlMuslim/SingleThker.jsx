import Loading from "../../Components/Loading/Loading";
import Title from "./../../Components/Title/Title";
import "./Hesn.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Audio from "./../../Components/Audio/Audio";
import GetThkerData from "./data/singleThkerData";

function SingleThker({
	match: {
		params: { name, id: thkerID },
	},
}) {
	const thkerName = name;
	const { loading, error, url, dataArray, setPlayingAudio, playingAudio } =
		GetThkerData(thkerID);

	return (
		<div className="single-thker">
			<div className="header">
				<Title title={thkerName} />
				<PlayCircleOutlineIcon
					className="icon"
					fontSize="large"
					onClick={() => setPlayingAudio(url)}
				/>
			</div>
			{loading ? (
				<Loading />
			) : (
				<div className="athkarBox">
					{dataArray.map((obj) => {
						return <h4 key={obj.ID}>{obj.Text}</h4>;
					})}
				</div>
			)}
			{playingAudio && <Audio playingItem={url} />}
		</div>
	);
}

export default SingleThker;

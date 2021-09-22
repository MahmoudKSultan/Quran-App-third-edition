import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import RadioIcon from "@material-ui/icons/Radio";
import EqualizerIcon from "@material-ui/icons/Equalizer";
const getData = (readersNum, surasNum, izaasNum) => {
	const dataArray = [
		{
			name: "القراء",
			path: "/favorites/readers",
			icon: <RecordVoiceOverIcon />,
			count: readersNum,
		},
		{
			name: "السور",
			path: "/favorites/suras",
			icon: <EqualizerIcon />,
			count: surasNum,
		},
		{
			name: "الاذاعات",
			path: "/favorites/izaas",
			icon: <RadioIcon />,
			count: izaasNum,
		},
	];

	return dataArray;
};

export default getData;

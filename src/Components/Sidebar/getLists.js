import {
	RadioOutlinedIcon,
	FavoriteBorderIcon,
	AccountCircleOutlinedIcon,
	ImportContactsOutlinedIcon,
	QueueMusicOutlinedIcon,
	SurroundSoundOutlinedIcon,
} from "./exports";

const lists = [
	{
		id: 1,
		link: "/readers",
		title: "قائمة القراء",
		icon: <AccountCircleOutlinedIcon />,
	},
	{
		id: 223,
		link: "/quran",
		title: "القرءان كاملاً",
		icon: <ImportContactsOutlinedIcon />,
	},
	{ id: 2, link: "/favorites", title: "المفضلة", icon: <FavoriteBorderIcon /> },
	{ id: 3, link: "/izaa", title: "الاذاعة", icon: <RadioOutlinedIcon /> },
	{
		id: 4,
		link: "/playlist",
		title: "قائمة التشغيل",
		icon: <QueueMusicOutlinedIcon />,
	},
	{
		id: 5,
		link: "/athan",
		title: "الآذان",
		icon: <SurroundSoundOutlinedIcon />,
	},
];

export default lists;

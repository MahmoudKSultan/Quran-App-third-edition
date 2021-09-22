import {
	RadioOutlinedIcon,
	FavoriteBorderIcon,
	AccountCircleOutlinedIcon,
	ScheduleIcon,
	EcoIcon,
} from "./exports";

const lists = [
	{
		id: 1,
		link: "/readers",
		title: "قائمة القراء",
		icon: <AccountCircleOutlinedIcon />,
	},
	{
		id: 5123,
		link: "/hesn",
		title: "حصن المسلم",
		icon: <EcoIcon />,
	},

	{ id: 2, link: "/favorites", title: "المفضلة", icon: <FavoriteBorderIcon /> },
	{ id: 3, link: "/izaa", title: "الاذاعة", icon: <RadioOutlinedIcon /> },
	{
		id: 5,
		link: "/athan",
		title: "مواقيت الصلاة",
		icon: <ScheduleIcon />,
	},
];

export default lists;

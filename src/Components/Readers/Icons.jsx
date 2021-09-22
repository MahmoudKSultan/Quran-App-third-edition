import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LinkIcon from "@material-ui/icons/Link";

import { IconButton } from "@material-ui/core";

// import useSurasHook from "./../../Hooks/useSurasHook";
const StyledMenu = withStyles({
	paper: {
		// border: "1px solid #d3d4d5",
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		"&:focus": {
			backgroundColor: theme.palette.primary.main,
			"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

export default function Icons({
	sura,
	reader,
	addSuraToFavorites,
	favoriteSuras,
}) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const [inFav, setInFav] = useState(false);

	useEffect(() => {
		if (favoriteSuras) {
			const inFav = favoriteSuras.find(
				(obj) => obj.id === sura.id && obj.readerName === reader.name
			);
			setInFav(inFav);
		}
	}, [favoriteSuras]);

	return (
		<div>
			<IconButton
				aria-haspopup="true"
				onClick={handleClick}
				aria-label="upload picture"
				component="span"
			>
				<MoreVertIcon className="icon-btn" />
			</IconButton>

			<StyledMenu
				id="customized-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<StyledMenuItem
					onClick={() => {
						addSuraToFavorites(
							{ readerName: reader.name, rewayaName: reader.rewaya },
							sura
						);
						// addSuraToFavorites(sura, "favoriteSuras");
						handleClose();
					}}
				>
					<ListItemIcon>
						{inFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					</ListItemIcon>
					<ListItemText primary={inFav ? "في المفضلة" : "أضف للمفضلة"} />
				</StyledMenuItem>

				<StyledMenuItem
					onClick={() => {
						navigator.clipboard.writeText(sura.url);
						handleClose();
					}}
				>
					<ListItemIcon>
						<LinkIcon />
					</ListItemIcon>
					<ListItemText primary={"انسخ الرابط"} />
				</StyledMenuItem>
			</StyledMenu>
		</div>
	);
}

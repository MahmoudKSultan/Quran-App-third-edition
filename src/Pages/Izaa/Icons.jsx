import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import LinkIcon from "@material-ui/icons/Link";
import IconButton from "@material-ui/core/IconButton";

// import useIzaasHook from "./../../Hooks/useIzaasHook";
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

export default function Icons({ izaa, favoriteIzaas, addIzaaToFavorites }) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const [inFav, setInFav] = useState(false);
	useEffect(() => {
		if (favoriteIzaas) {
			const inFav = favoriteIzaas.find((s) => s.radio_url === izaa.radio_url);
			setInFav(inFav);
		}
	}, [favoriteIzaas]);
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
						addIzaaToFavorites(izaa, "favoriteIzaas");
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
						navigator.clipboard.writeText(izaa.radio_url);
						handleClose();
					}}
				>
					<ListItemIcon>
						<LinkIcon />
					</ListItemIcon>
					<ListItemText primary={"إنسخ الرابط"} />
				</StyledMenuItem>
			</StyledMenu>
		</div>
	);
}

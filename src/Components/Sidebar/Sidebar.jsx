import React from "react";
import "./Sidebar.css";
import lists from "./getLists";
import { useState } from "react";
import {
	Link,
	makeStyles,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListSubheader,
} from "./exports";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: "#2e334d",
		color: "rgba(255, 255, 255, 0.7)",
	},
}));

export default function Sidebar(props) {
	const [History, setHistory] = useState("/readers");
	const classes = useStyles();

	return (
		<div className="sidebar">
			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						الموقع الشامل
					</ListSubheader>
				}
				className={classes.root}
			>
				{lists.map((list) => {
					return (
						<Link
							to={list.link}
							key={list.id}
							onClick={() => setHistory(list.link)}
						>
							<ListItem
								button
								className={History === list.link ? "active" : null}
							>
								<ListItemIcon>{list.icon}</ListItemIcon>
								<ListItemText primary={list.title} />
							</ListItem>
						</Link>
					);
				})}
			</List>
		</div>
	);
}

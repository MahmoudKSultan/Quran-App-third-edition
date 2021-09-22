import "./Sidebar.css";
import lists from "./getLists";
import { useState } from "react";
import { Link, ListItem, ListItemIcon, ListItemText } from "./exports";
import { Consumer } from "../../context";

export default function Sidebar(props) {
	const [History, setHistory] = useState(window.location.pathname);

	return (
		<Consumer>
			{(value) => {
				return (
					<div className="sidebar ">
						<h1>موقع القرءان الكريم</h1>
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
					</div>
				);
			}}
		</Consumer>
	);
}

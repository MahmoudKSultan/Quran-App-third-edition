import React from "react";

const context = React.createContext();
const Consumer = context.Consumer;

class Provider extends React.Component {
	state = {
		favoriteReaders: [],
		favoriteSuras: [],
		surasPlaylist: [],
		favoriteIzaas: [],
		playingSura: "",
		lastPlayedSura: {},
	};
	componentDidMount = () => {
		this.setState({
			favoriteReaders:
				JSON.parse(localStorage.getItem("favoriteReaders")) || [],
			favoriteSuras: JSON.parse(localStorage.getItem("favoriteSuras")) || [],
			surasPlaylist: JSON.parse(localStorage.getItem("surasPlaylist")) || [],
			favoriteIzaas: JSON.parse(localStorage.getItem("favoriteIzaas")) || [],
		});
	};

	// delete item (sura, reader or izaa) to favorites or playlist
	deleteFromFavorite = (item, favoriteItems) => {
		let { [favoriteItems]: items } = this.state;
		const itemsAfterDelete = items.filter((i) => i.name !== item.name);
		this.setState({ [favoriteItems]: itemsAfterDelete });
		localStorage.setItem(favoriteItems, JSON.stringify(itemsAfterDelete));
	};

	// reser playing sura
	resetPlayingSura = () => this.setState({ playingSura: "" });

	// when click on play
	playSura = (playingSura) => this.setState({ playingSura });

	// add item (sura, reader or izaa) to favorites or playlist
	addItemToFavorites = (item, itemsName) => {
		let { [itemsName]: items } = this.state;
		if (items.find((i) => i.name === item.name)) {
			return;
		}
		items = [...items, item];
		this.setState({ [itemsName]: items });
		localStorage.setItem(itemsName, JSON.stringify(items));
	};

	render() {
		return (
			<context.Provider
				value={{
					...this.state,
					playSura: this.playSura,
					resetPlayingSura: this.resetPlayingSura,
					deleteFromFavorite: this.deleteFromFavorite,
					addItemToFavorites: this.addItemToFavorites,
				}}
			>
				{this.props.children}
			</context.Provider>
		);
	}
}

export { Provider, Consumer };

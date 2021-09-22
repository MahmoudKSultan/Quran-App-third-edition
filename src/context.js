import React from "react";

const context = React.createContext();
const Consumer = context.Consumer;

class Provider extends React.Component {
	state = {
		favoriteReaders: [],
		favoriteSuras: [],
		favoriteIzaas: [],
		playingSura: "",
		lastPlayedSura: {},
		sidebarStatus: 1,
	};
	componentDidMount = () => {
		this.setState({
			favoriteReaders:
				JSON.parse(localStorage.getItem("favoriteReaders")) || [],
			favoriteSuras: JSON.parse(localStorage.getItem("favoriteSuras")) || [],
			favoriteIzaas: JSON.parse(localStorage.getItem("favoriteIzaas")) || [],
		});
	};

	// delete item (sura, reader or izaa) to favorites or playlist
	deleteFromFavorite = (field, value, favoriteItems) => {
		let { [favoriteItems]: items } = this.state;
		const itemsAfterDelete = items.filter((i) => i[field] !== value);
		this.setState({ [favoriteItems]: itemsAfterDelete });
		localStorage.setItem(favoriteItems, JSON.stringify(itemsAfterDelete));
	};

	// reser playing sura
	resetPlayingSura = () => this.setState({ playingSura: "" });

	// when click on play
	playSura = (playingSura) => this.setState({ playingSura });

	// add item (reader or izaa) to favorites or playlist
	addItemToFavorites = (item, itemsName) => {
		let { [itemsName]: items } = this.state;
		if (items.find((i) => i.name === item.name)) {
			return;
		}
		items = [...items, item];
		this.setState({ [itemsName]: items });
		localStorage.setItem(itemsName, JSON.stringify(items));
	};

	// add surasw to favorites
	addSuraToFavorites = (reader, sura) => {
		let favoriteSuras = this.state.favoriteSuras;
		const fullSura = { ...reader, ...sura };
		if (
			favoriteSuras.find(
				(obj) => obj.readerName === reader.readerName && obj.id === sura.id
			)
		) {
			return;
		}

		favoriteSuras = [...favoriteSuras, fullSura];
		this.setState({ favoriteSuras });
		localStorage.setItem("favoriteSuras", JSON.stringify(favoriteSuras));
	};

	render() {
		console.log("context");
		return (
			<context.Provider
				value={{
					...this.state,
					playSura: this.playSura,
					resetPlayingSura: this.resetPlayingSura,
					deleteFromFavorite: this.deleteFromFavorite,
					addItemToFavorites: this.addItemToFavorites,
					addSuraToFavorites: this.addSuraToFavorites,
				}}
			>
				{this.props.children}
			</context.Provider>
		);
	}
}

export { Provider, Consumer };

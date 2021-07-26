import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Readers from "./Pages/Readers/Readers";
import Favorites from "./Pages/Favorites/Favorites";
import Suras from "./Pages/Suras/Suras";
import Quran from "./Pages/Quran/Quran";
import { Grid } from "@material-ui/core";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Provider } from "./context";
import Izaa from "./Pages/Izaa/Izaa";
import FavReaders from "./Components/FavoritesComps/Readers/FavReaders";
import AthanPage from "./Pages/Athan/AthanPage";
import FavSuras from "./Components/FavoritesComps/Suras/FavSuras";
function App() {
	return (
		<Provider>
			<div className="App">
				{/* <Navbar /> */}
				<Grid container justify="space-between">
					<Grid item md={3} className="hide-on-xs">
						<Sidebar />
					</Grid>
					<Grid item md={9} xs={12} className="pageBody">
						<Switch>
							<Route path="/" component={Home} exact />
							<Route path="/quran" component={Quran} />
							<Route path="/readers" component={Readers} exact />
							<Route path="/readers/:id" component={Suras} />
							<Route path="/favorites" component={Favorites} exact />
							<Route path="/favorites/readers" component={FavReaders} />
							<Route path="/favorites/suras" component={FavSuras} />
							<Route path="/izaa" component={Izaa} exact />
							<Route path="/athan" component={AthanPage} />
						</Switch>
					</Grid>
				</Grid>
			</div>
		</Provider>
	);
}

export default App;

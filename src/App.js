import "./App.css";
import React, { Suspense, lazy, useRef } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "./context";
import Loading from "./Components/Loading/Loading";

function App() {
	const rightRef = useRef(null);
	const handleMenuClick = () => {
		rightRef.current.className === "right"
			? (rightRef.current.className = "right hide-on-xs")
			: (rightRef.current.className = "right");
	};

	const Sidebar = lazy(() => import("./Components/Sidebar/Sidebar"));
	const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
	const Quran = lazy(() => import("./Pages/Quran/Quran"));
	const Readers = lazy(() => import("./Pages/Readers/Readers"));
	const Suras = lazy(() => import("./Pages/Suras/Suras"));
	const Favorites = lazy(() => import("./Pages/Favorites/Favorites"));
	const FavReaders = lazy(() =>
		import("./Components/FavoritesComps/Readers/FavReaders")
	);
	const FavSuras = lazy(() =>
		import("./Components/FavoritesComps/Suras/FavSuras")
	);
	const Izaa = lazy(() => import("./Pages/Izaa/Izaa"));
	const AthanPage = lazy(() => import("./Pages/Athan/AthanPage"));
	const Hesn = lazy(() => import("./Pages/HesnAlMuslim/Hesn"));
	const SingleThker = lazy(() => import("./Pages/HesnAlMuslim/SingleThker"));
	const FavIzaas = lazy(() =>
		import("./Components/FavoritesComps/Izaas/FavIzaas")
	);
	return (
		<Provider>
			<div className="App">
				<Suspense fallback={<small>loading..</small>}>
					<Navbar menuClick={handleMenuClick} />
				</Suspense>
				<div className="wrapper">
					<div className="right hide-on-xs" ref={rightRef}>
						<Suspense fallback={<h1>loading</h1>}>
							<Sidebar />
						</Suspense>
					</div>
					<div className="left">
						<Switch>
							<Suspense fallback={<small>loading..</small>}>
								{/* <Route path="/" component={exact} exact /> */}

								<Route path="/quran" component={Quran} exact />
								<Route path="/readers" component={Readers} exact />
								<Route path="/readers/:id" component={Suras} />
								<Route path="/favorites" component={Favorites} exact />
								<Route path="/favorites/readers" component={FavReaders} />
								<Route path="/favorites/suras" component={FavSuras} />
								<Route path="/favorites/izaas" component={FavIzaas} />
								<Route path="/izaa" component={Izaa} exact />
								<Route path="/athan" component={AthanPage} />
								<Route path="/hesn" component={Hesn} exact />
								<Route path="/hesn/:id/:name" component={SingleThker} />
								<Route
									path="/"
									render={() => <Redirect to="/readers" />}
									exact
								/>
								{/* <Route path="/not-found" component={NotFound} exact /> */}
							</Suspense>
						</Switch>
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;

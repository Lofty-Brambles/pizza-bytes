import React from "react";
import "./App.scss";
import { Home, Menu, ShoppingBag } from "react-feather";
import { Outlet } from "react-router-dom";
import page from "./interfaces";

import Homepg from "./pages/Homepg";
import FootBar from "./components/FootBar";
import TitleBar from "./components/TitleBar";

import Routing from "./Routing";
import Menupg from "./pages/Menupg";
import Cartpg from "./pages/Cartpg";

const dtls: Array<page> = [
	{
		name: "Home",
		path: "/",
		component: <Homepg />,
		icon: <Home color="red" size={24} />,
	},
	{
		name: "Menu",
		path: "/menu",
		component: <Menupg />,
		icon: <Menu color="blue" size={24} />,
	},
	{
		name: "Cart",
		path: "/cart",
		component: <Cartpg />,
		icon: <ShoppingBag color="purple" size={24} />,
	},
];

const App = () => (
	<div className="App">
		<TitleBar />
		<Routing pages={dtls} />
		<main>
			<Outlet />
		</main>
		<FootBar pages={dtls} />
	</div>
);

export default App;
export { dtls };

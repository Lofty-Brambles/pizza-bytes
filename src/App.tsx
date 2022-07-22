import React from "react";
import "./App.scss";
import { Home, Menu, ShoppingBag } from "react-feather";
import page from "./interfaces";

import FootBar from "./components/FootBar";
import Routing from "./Routing";
import TitleBar from "./components/TitleBar";

import Homepg from "./pages/Homepg";
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
		<main>
			<Routing pages={dtls} />
		</main>
		<FootBar pages={dtls} />
	</div>
);

export default App;
export { dtls };

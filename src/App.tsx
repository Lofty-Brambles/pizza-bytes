import React, { useState } from "react";
import "./App.scss";
import { Home, Menu, ShoppingBag } from "react-feather";
import { cartItem, page } from "./interfaces";

import FootBar from "./components/FootBar";
import Routing from "./Routing";
import TitleBar from "./components/TitleBar";

import Homepg from "./pages/Homepg";
import Menupg from "./pages/Menupg";
import Cartpg from "./pages/Cartpg";

const App = () => {
	const [cart, setCart] = useState<Array<cartItem>>([]);

	const add = (itemtoAdd: cartItem) => {
		if (itemtoAdd.quantity === 0) return;
		let dupe: boolean = false;

		cart.forEach((item, index) => {
			if (item.dtls.name === itemtoAdd.dtls.name) {
				const newC = [...cart];

				const update = newC[index];
				update.quantity += itemtoAdd.quantity;
				newC[index] = update;

				setCart(newC);
				dupe = true;
			}
		});

		if (!dupe) {
			setCart(prev => [...prev, itemtoAdd]);
		}
	};

	const remove: Function = (itemtoRem: cartItem) => {
		const newC = [...cart].filter(
			ele => ele.dtls.name !== itemtoRem.dtls.name
		);
		setCart(newC);
	};

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
			component: <Menupg add={add} />,
			icon: <Menu color="blue" size={24} />,
		},
		{
			name: "Cart",
			path: "/cart",
			component: <Cartpg remove={remove} cart={cart} />,
			icon: <ShoppingBag color="purple" size={24} />,
		},
	];

	return (
		<div className="App">
			<TitleBar />
			<Routing pages={dtls} />
			<FootBar pages={dtls} />
		</div>
	);
};

export default App;

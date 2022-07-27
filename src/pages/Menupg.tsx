import React from "react";
import { Outlet } from "react-router-dom";
import ItemMenu from "../components/ItemMenu";
import "./Menupg.scss";

export default function Menupg({ add }: { add: Function }) {
	return (
		<main>
			<h3>Choose the yummiest ones!</h3>
			<ItemMenu add={add} />
			<Outlet />
		</main>
	);
}

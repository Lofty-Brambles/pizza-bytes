import React from "react";
import Card from "./Card";
import "../styles/components/ItemMenu.scss";
import { item } from "../interfaces";

export const Menu: Array<item> = [
	{
		picture: "./margherita.jpg",
		name: "Simple Margherita",
		desc: "A simply-sprinkled, lightly spiced, easy on ingredients pizza. Good for a quick bite! Who needs extra toppings?",
		price: 20,
	},
	{
		picture: "./farmhouse.jpg",
		name: "Farmhouse Frenzy",
		desc: "A classic. Freshly baked, farm-fresh ingredients, with a heavenly hand. Always get the best at the freshest date.",
		price: 30,
	},
	{
		picture: "./pepper.jpg",
		name: "Pepper paparazzi",
		desc: "Quirky and nitpicky, intrigues a human. Spiced to bits with well cooked meat, this pizza's here to steal the beat.",
		price: 45,
	}
];

export default function ItemMenu({ add }: { add: Function }) {
	return (
		<div id="menu-wrap">
			{Menu.map((ele, i: number) => (
				// eslint-disable-next-line react/no-array-index-key
				<Card key={i} dtls={ele} add={add} />
			))}
		</div>
	);
}

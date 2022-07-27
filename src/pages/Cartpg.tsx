import React from "react";
import { Bell } from "react-feather";
import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";
import { cartItem } from "../interfaces";
import "./Cartpg.scss";

export default function Cartpg({
	cart,
	remove,
}: {
	cart: Array<cartItem>;
	remove: Function;
}) {
	const num: number =
		cart.length > 0
			? cart.map(e => e.quantity * e.dtls.price).reduce((p, n) => p + n)
			: 0;

	return (
		<main>
			<div>
				<div id="cart-top">
					<h3>Your Cart</h3>
					<h3>Total: ${num}</h3>
				</div>
				{cart.length > 0 ? (
					cart.map((ele: cartItem, i: number) => (
						<CartCard
							// eslint-disable-next-line react/no-array-index-key
							key={i}
							dtls={ele.dtls}
							quantity={ele.quantity}
							remove={remove}
						/>
					))
				) : (
					<div id="warn">
						There are no items in your cart!
						<br />
						Visit the Menu to add some delicious food!
					</div>
				)}
				{cart.length > 0 ? (
					<Link to="/psych">
						<button type="button">
							<Bell size={16} />
							&nbsp;Order Now!
						</button>
					</Link>
				) : (
					""
				)}
			</div>
		</main>
	);
}

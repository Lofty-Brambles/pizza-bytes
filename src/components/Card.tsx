import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cartItem, item } from "../interfaces";
import "../styles/components/Card.scss";

export default function Card({ dtls, add }: { dtls: item; add: Function }) {
	const [quantity, setQuantity] = useState<number>(1);

	const setter = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		setQuantity(+e.target.value);
	};

	const increment = () => {
		setQuantity(prev => prev + 1);
	};

	const decrement = () => {
		setQuantity(prev => (prev !== 0 ? prev - 1 : 0));
	};

	const addToCart = () => {
		const CartItem: cartItem = {
			dtls,
			quantity,
		};
		add(CartItem);
	};

	return (
		<div className="card">
			<img src={dtls.picture} alt={dtls.name} />
			<div id="dtls">
				<p><Link to={`/menu/${dtls.picture.slice(2, dtls.picture.length - 4)}`}>{dtls.name}</Link></p>
				<p>${dtls.price}</p>
			</div>
			<div id="ctls">
				<button type="button" className="less" onClick={decrement}>
					-
				</button>
				<input value={quantity} onChange={e => setter(e)} />
				<button type="button" className="more" onClick={increment}>
					+
				</button>
			</div>
			<button type="button" onClick={addToCart}>
				Add to Cart
			</button>
		</div>
	);
}

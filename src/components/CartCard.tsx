import React from "react";
import { Trash } from "react-feather";
import { item } from "../interfaces";
import "../styles/components/CartCard.scss";

export default function CartCard({
	dtls,
	quantity,
	remove,
}: {
	dtls: item;
	quantity: number;
	remove: Function;
}) {
	return (
		<div className="cart-card">
			<img src={dtls.picture} alt={dtls.name} />
			<div>
				<div id="dtls">
					<p>{dtls.name}</p>
					<p>${dtls.price}</p>
				</div>
				<div>
					<p>Quantity: {quantity}<br />Net Price: ${dtls.price * quantity}</p>
					<button
						type="button"
						onClick={() => {
							remove({ dtls, quantity });
						}}
					>
						<Trash size={16} color="red" />
						&nbsp;Remove
					</button>
				</div>
			</div>
		</div>
	);
}

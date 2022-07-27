import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { item } from "../interfaces";
import { Menu } from "./ItemMenu";
import "../styles/components/Modal.scss";

export default function Modal() {
	const nav = useNavigate();
	const params = useParams();
	const comp: item | undefined = Menu.find(
		ele => ele.picture.slice(2, ele.picture.length - 4) === params.name
	);
	return (
		<div className="modal-div">
			<div className="modal">
				<img src={comp?.picture} alt={comp?.name} />
				<div id="body">
					<h3>{comp?.name}</h3>
					<p>{comp?.desc}</p>
				</div>
				<footer>
					<button
						type="button"
						onClick={() => {
							nav(-1);
						}}
					>
						❌ Close
					</button>
				</footer>
			</div>
		</div>
	);
}

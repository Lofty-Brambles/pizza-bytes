import React from "react";
import { NavLink } from "react-router-dom";
import { page } from "../interfaces";
import "../styles/components/FootBar.scss";

type Props = {
	pages: Array<page>;
};

const FootBar = ({ pages }: Props) => (
	<footer data-testid="footer">
		{pages.map(ele => (
			<NavLink to={ele.path} key={ele.path}>
				<div>{ele.icon}</div> <div>{ele.name}</div>
			</NavLink>
		))}
	</footer>
);

export default FootBar;

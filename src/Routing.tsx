import React from "react";
import { Route, Routes } from "react-router-dom";
import page from "./interfaces";

type Props = {
	pages: Array<page>;
};

const Routing: React.FC<Props> = ({ pages }) => (
	<Routes>
		{pages.map(ele => (
			<Route key={ele.path} path={ele.path} element={ele.component} />
		))}
		<Route path="*" element="" />
	</Routes>
);

export default Routing;

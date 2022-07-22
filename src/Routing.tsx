import React from "react";
import { Route, Routes } from "react-router-dom";
import page from "./interfaces";

type Props = {
	pages: Array<page>;
};

const Routing = ({ pages }: Props) => (
	<Routes>
		{pages.map(ele => (
			<Route key={ele.path} path={ele.path} element={ele.component} />
		))}
	</Routes>
);

export default Routing;

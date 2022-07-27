import React from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import { page } from "./interfaces";
import Psych from "./pages/Psych";

type Props = {
	pages: Array<page>;
};

const Routing = ({ pages }: Props) => (
	<Routes>
		{pages.map(ele => (
			ele.name !== "Menu" ?
			<Route key={ele.path} path={ele.path} element={ele.component} /> :
			<Route key={ele.path} path={ele.path} element={ele.component}>
				<Route path=":name" element={<Modal />} />
			</Route>
		))}
		<Route path="psych" element={<Psych />} />
		<Route path="*" element={<Psych />} />
	</Routes>
);

export default Routing;

import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

describe("Navigation bar component", () => {
	test("snapshot", () => {
		const { container } = render(<NavBar />);
		expect(container).toMatchSnapshot();
	});
});

import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./TitleBar";

describe("Title bar component", () => {
	test("snapshot", () => {
		const { container } = render(<NavBar />);
		expect(container).toMatchSnapshot();
	});
});

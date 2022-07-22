import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("Navigation bar component", () => {
	test("snapshot", () => {
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});
});

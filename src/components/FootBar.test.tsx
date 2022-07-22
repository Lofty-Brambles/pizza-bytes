import React from "react";
import { render } from "@testing-library/react";
import { dtls } from "../App";
import FootBar from "./FootBar";

describe("Footer Bar component", () => {
	test("snapshot", () => {
		const { container } = render(<FootBar pages={dtls} />);
		expect(container).toMatchSnapshot();
	});
});

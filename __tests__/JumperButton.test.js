import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { JumperButton } from "../components/index.ts";

describe("JumperButton", () => {
	let button,
		buttonSVG,
		mockScrollFunction = (window.scrollTo = jest.fn()); // This is a mock function

	beforeEach(() => {
		render(<JumperButton buttonColor="red" />);

		button = screen.getByTestId("jumper-button");
		buttonSVG = screen.getByTestId("jumper-button-svg");
	});

	it("Should render all elements", () => {
		expect(button).toBeInTheDocument();
		expect(buttonSVG).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(button).toBeEnabled();
		expect(button).toHaveAttribute("type", "button");
		expect(button).toHaveAttribute("title", "برو به بالای صفحه!");
		expect(button).toHaveClass("fixed text-red-500 border-red-500");

		expect(buttonSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(buttonSVG).toHaveAttribute("fill", "none");
		expect(buttonSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(buttonSVG).toHaveAttribute("stroke-width", "2");
		expect(buttonSVG).toHaveAttribute("stroke", "currentColor");
		expect(buttonSVG).toHaveClass("w-6 h-6");
	});

	it("Should handle events", () => {
		fireEvent.click(button);

		expect(mockScrollFunction).toBeCalled();
		expect(mockScrollFunction).toBeCalledTimes(1);
		expect(mockScrollFunction).toBeCalledWith(0, 0);
	});
});

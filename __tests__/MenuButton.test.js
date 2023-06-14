import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import MenuButton from "../components/MenuButton/MenuButton";

describe("MenuButton", () => {
	it("Rendered?", () => {
		render(<MenuButton />);

		const button = screen.getByTestId("menu-button");
		const buttonSVG = screen.getByTestId("menu-button-svg");

		expect(button).toBeInTheDocument();
		expect(buttonSVG).toBeInTheDocument();
	});

	it("Has initial props?", () => {
		const setIsAside = jest.fn();

		render(<MenuButton />);

		const button = screen.getByTestId("menu-button");
		const buttonSVG = screen.getByTestId("menu-button-svg");

		expect(button).toBeEnabled();
		expect(button).toHaveAttribute("type", "button");
		expect(button).toHaveClass("flex justify-center items-center absolute hover:cursor-pointer");

		fireEvent.click(button);
		expect(setIsAside).toBeCalledTimes(0);

		expect(buttonSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(buttonSVG).toHaveAttribute("fill", "none");
		expect(buttonSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(buttonSVG).toHaveAttribute("stroke-width", "3");
		expect(buttonSVG).toHaveAttribute("stroke", "currentColor");
		expect(buttonSVG).toHaveClass("w-6 h-6");
	});
});

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import CloseButton from "../components/CloseButton/CloseButton";

describe("CloseButton", () => {
	it("Rendered?", () => {
		render(<CloseButton />);

		const button = screen.getByTestId("close-button");
		const buttonSVG = screen.getByTestId("close-button-svg");

		expect(button).toBeInTheDocument();
		expect(buttonSVG).toBeInTheDocument();
	});

	it("Has initial props?", () => {
		const setIsAside = jest.fn();

		render(<CloseButton setIsAside={setIsAside} />);

		const button = screen.getByTestId("close-button");
		const buttonSVG = screen.getByTestId("close-button-svg");

		expect(button).toBeEnabled();
		expect(button).toHaveAttribute("type", "button");
		expect(button).toHaveClass(
			"flex justify-center items-center absolute",
    );
    
    fireEvent.click(button);
		expect(setIsAside).toHaveBeenCalled();
		expect(setIsAside).toBeCalledTimes(1);

		expect(buttonSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(buttonSVG).toHaveAttribute("fill", "none");
		expect(buttonSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(buttonSVG).toHaveAttribute("stroke-width", "3");
		expect(buttonSVG).toHaveAttribute("stroke", "currentColor");
		expect(buttonSVG).toHaveClass("w-5 h-5");
	});
});

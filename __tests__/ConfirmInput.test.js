import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ConfirmInput } from "../components/index.ts";

describe("ConfirmInput", () => {
	let confirmInput, confirmInputSVG;

	const inputValue = "entered text",
		mockSetInputValue = jest.fn().mockName("setInputValue");

	beforeEach(() => {
		render(<ConfirmInput inputValue={inputValue} setInputValue={mockSetInputValue} />);

		confirmInput = screen.getByTestId("confirm-input");
		confirmInputSVG = screen.getByTestId("confirm-input-svg");
	});

	it("Should render all elements", () => {
		expect(confirmInput).toBeInTheDocument();
		expect(confirmInputSVG).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(confirmInput).toHaveAttribute("type", "number");
		expect(confirmInput).toHaveAttribute("placeholder", "کد پیامک شده را وارد کنید");
		expect(confirmInput).toHaveAttribute("value", "entered text");
		expect(confirmInput).toHaveAttribute("minlength", "3");
		expect(confirmInput).toHaveAttribute("maxlength", "15");
		expect(confirmInput).toHaveClass("w-full h-10 outline-none");

		expect(confirmInputSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(confirmInputSVG).toHaveAttribute("fill", "none");
		expect(confirmInputSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(confirmInputSVG).toHaveAttribute("stroke-width", "1.5");
		expect(confirmInputSVG).toHaveAttribute("stroke", "currentColor");
		expect(confirmInputSVG).toHaveClass("w-6 h-6");
	});

	it("Should handle events", () => {
		fireEvent.change(confirmInput, {
			target: {
				inputValue,
			},
		});

		expect(mockSetInputValue).toBeCalled();
		expect(mockSetInputValue).toBeCalledTimes(1);
		expect(mockSetInputValue).toBeCalledWith("");
	});
});

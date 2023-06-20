import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SignupInput } from "../components/index.ts";

describe("SignupInput", () => {
	let signupInput, signupInputSVG;

	const inputValue = "entered text",
		mockSetInputValue = jest.fn().mockName("setInputValue");

	beforeEach(() => {
		render(<SignupInput inputValue={inputValue} setInputValue={mockSetInputValue} />);

		signupInput = screen.getByTestId("signup-input");
		signupInputSVG = screen.getByTestId("signup-input-svg");
	});

	it("Should render all elements", () => {
		expect(signupInput).toBeInTheDocument();
		expect(signupInputSVG).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(signupInput).toHaveAttribute("type", "number");
		expect(signupInput).toHaveAttribute("placeholder", "کدملی / شماره موبایل / شماره قبض");
		expect(signupInput).toHaveAttribute("value", "entered text");
		expect(signupInput).toHaveAttribute("minlength", "3");
		expect(signupInput).toHaveAttribute("maxlength", "15");
		expect(signupInput).toHaveClass("w-full h-10 outline-none");

		expect(signupInputSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(signupInputSVG).toHaveAttribute("fill", "none");
		expect(signupInputSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(signupInputSVG).toHaveAttribute("stroke-width", "1.5");
		expect(signupInputSVG).toHaveAttribute("stroke", "currentColor");
		expect(signupInputSVG).toHaveClass("w-6 h-6");
	});

	it("Should handle events", () => {
		fireEvent.change(signupInput, {
			target: {
				inputValue,
			},
		});

		expect(mockSetInputValue).toBeCalled();
		expect(mockSetInputValue).toBeCalledTimes(1);
		expect(mockSetInputValue).toBeCalledWith("");
	});
});

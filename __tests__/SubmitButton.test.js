import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SubmitButton } from "../components/index.ts";

describe("SubmitButton", () => {
	let button, buttonSVG, buttonSpan;

	beforeAll(() => {
		// Render the component with default props
		render(<SubmitButton btnText="ورود" isCaptchaValid={false} />);

		button = screen.getByTestId("submit-button");
		buttonSVG = screen.getByTestId("submit-button-svg");
		buttonSpan = screen.getByTestId("submit-button-span");
	});

	it("Should render all elements", () => {
		expect(button).toBeInTheDocument();
		expect(buttonSVG).toBeInTheDocument();
		expect(buttonSpan).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(button).toBeDisabled();
		expect(button).toHaveAttribute("disabled");
		expect(button).toHaveAttribute("type", "submit");
		expect(button).toHaveClass("flex justify-center items-center self-center max-w-fit");

		expect(buttonSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(buttonSVG).toHaveAttribute("fill", "none");
		expect(buttonSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(buttonSVG).toHaveAttribute("stroke-width", "1.5");
		expect(buttonSVG).toHaveAttribute("stroke", "currentColor");
		expect(buttonSVG).toHaveClass("w-6 h-6");

		expect(buttonSpan).toHaveTextContent("ورود");
	});

	it("Should validate elements props when the button is disable", () => {
		expect(button).toBeDisabled();
		expect(button).toHaveAttribute("disabled");
		expect(button).toHaveClass("cursor-not-allowed opacity-50");
	});

	it("Should validate elements props when the button is enable", () => {
		// Render the component with new props then get elements
		render(<SubmitButton btnText="ورود" isCaptchaValid={true} />);

		const button = screen.getByTestId("submit-button");

		expect(button).toBeEnabled();
		expect(button).not.toHaveAttribute("disabled");
		expect(button).toHaveClass("cursor-pointer");
	});
});

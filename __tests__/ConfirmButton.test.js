import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import ConfirmButton from "../components/ConfirmButton/ConfirmButton";

describe("ConfirmButton", () => {
	let button,
		buttonSVG,
		buttonSpan,
		mockUrl = global.window.location.pathname + "confirmation"; // This is a mock url

	beforeAll(() => {
		// Render the component with default props
		render(<ConfirmButton btnText="تایید" isDisable={true} />);

		button = screen.getByTestId("confirm-button");
		buttonSVG = screen.getByTestId("confirm-button-svg");
		buttonSpan = screen.getByTestId("confirm-button-span");
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
		expect(button).toHaveClass("flex justify-center items-center self-center max-w-fit outline-none");

		expect(buttonSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(buttonSVG).toHaveAttribute("fill", "none");
		expect(buttonSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(buttonSVG).toHaveAttribute("stroke-width", "1.5");
		expect(buttonSVG).toHaveAttribute("stroke", "currentColor");
		expect(buttonSVG).toHaveClass("w-6 h-6");

		expect(buttonSpan).toHaveTextContent("تایید");
	});

	it("Should validate elements props when the button is disable", () => {
		expect(button).toBeDisabled();
		expect(button).toHaveAttribute("disabled");
		expect(button).toHaveClass("cursor-not-allowed opacity-50");
	});

	it("Should validate elements props when the button is enable", () => {
		// Render the component with new props then get elements
		render(<ConfirmButton btnText="تایید" isDisable={false} />);

		const button = screen.getByTestId("confirm-button");

		expect(button).toBeEnabled();
		expect(button).not.toHaveAttribute("disabled");
		expect(button).toHaveClass("cursor-pointer");
	});

	it("Should handle events", () => {
		fireEvent.click(button);

		const newMockUrl = mockUrl.replace(/confirmation/i, "booking");

		expect(newMockUrl).toBe("/booking");
	});
});

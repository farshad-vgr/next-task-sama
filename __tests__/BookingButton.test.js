import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BookingButton } from "../components/index.ts";

describe("BookingButton", () => {
	let button, buttonSVG, buttonSpan;

	beforeAll(() => {
		// Render the component with default props
		render(<BookingButton btnText="ثبت نوبت" isDisable={true} />);

		button = screen.getByTestId("booking-button");
		buttonSVG = screen.getByTestId("booking-button-svg");
		buttonSpan = screen.getByTestId("booking-button-span");
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
		expect(button).toHaveClass("flex justify-center items-center self-center max-w-fit booking-button");

		expect(buttonSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(buttonSVG).toHaveAttribute("fill", "none");
		expect(buttonSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(buttonSVG).toHaveAttribute("stroke-width", "1.5");
		expect(buttonSVG).toHaveAttribute("stroke", "currentColor");
		expect(buttonSVG).toHaveClass("w-6 h-6");

		expect(buttonSpan).toHaveTextContent("ثبت نوبت");
	});

	it("Should validate elements props when the button is disable", () => {
		expect(button).toBeDisabled();
		expect(button).toHaveAttribute("disabled");
		expect(button).toHaveClass("cursor-not-allowed opacity-50");
	});

	it("Should validate elements props when the button is enable", () => {
		// Render the component with new props then get elements
		render(<BookingButton btnText="ثبت نوبت" isDisable={false} />);

		const button = screen.getByTestId("booking-button");

		expect(button).toBeEnabled();
		expect(button).not.toHaveAttribute("disabled");
		expect(button).toHaveClass("cursor-pointer");
	});

	it("Should handle events", () => {
		fireEvent.click(button);

		waitFor(() => {
			expect(screen.getByTestId("generate-pdf-button")).toBeEnabled();
			expect(button).not.toHaveAttribute("disabled");
			expect(button).toHaveClass("cursor-pointer");
		});
	});
});

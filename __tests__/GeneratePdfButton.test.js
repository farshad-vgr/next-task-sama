import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { GeneratePdfButton } from "../components/index.ts";

describe("GeneratePdfButton", () => {
	let button,
		buttonSVG,
		buttonSpan,
		downloadForm = jest.fn(); // This is a mock function

	beforeEach(() => {
		// Render the component with default props
		render(<GeneratePdfButton btnText="دانلود فرم" isDisable={true} />);

		button = screen.getByTestId("generate-pdf-button");
		buttonSVG = screen.getByTestId("generate-pdf-button-svg");
		buttonSpan = screen.getByTestId("generate-pdf-button-span");
	});

	it("Should render all elements", () => {
		expect(button).toBeInTheDocument();
		expect(buttonSVG).toBeInTheDocument();
		expect(buttonSpan).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(button).toBeDisabled();
		expect(button).toHaveAttribute("disabled");
		expect(button).toHaveAttribute("type", "button");
		expect(button).toHaveClass("flex justify-center items-center self-center max-w-fit outline-none download-button");

		expect(buttonSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(buttonSVG).toHaveAttribute("fill", "none");
		expect(buttonSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(buttonSVG).toHaveAttribute("stroke-width", "1.5");
		expect(buttonSVG).toHaveAttribute("stroke", "currentColor");
		expect(buttonSVG).toHaveClass("w-6 h-6");

		expect(buttonSpan).toHaveTextContent("دانلود فرم");
	});

	it("Should validate elements props when the button is disable", () => {
		expect(button).toBeDisabled();
		expect(button).toHaveAttribute("disabled");
		expect(button).toHaveClass("cursor-not-allowed opacity-50");
	});

	it("Should validate elements props when the button is enable", () => {
		cleanup();

		// Render the component with new props then get elements
		render(<GeneratePdfButton btnText="دانلود فرم" isDisable={false} />);

		const button = screen.getByTestId("generate-pdf-button");

		expect(button).toBeEnabled();
		expect(button).not.toHaveAttribute("disabled");
		expect(button).toHaveClass("cursor-pointer");
	});

	it("Should handle events", () => {
		fireEvent.click(button);

		waitFor(() => {
			expect(downloadForm).toBeCalled();
			expect(downloadForm).toBeCalledTimes(1);
		});
	});
});

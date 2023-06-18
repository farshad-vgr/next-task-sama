import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import { CloseButton, Asidebar } from "../components/index.ts";

describe("CloseButton", () => {
	const mockFunction = jest.fn().mockName("setIsAside"); // This is a mock function
	let button, buttonSVG;

	beforeEach(() => {
		render(<CloseButton setIsAside={mockFunction} />);

		button = screen.getByTestId("close-button");
		buttonSVG = screen.getByTestId("close-button-svg");
	});

	it("Should render all elements", () => {
		expect(button).toBeInTheDocument();
		expect(buttonSVG).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(button).toBeEnabled();
		expect(button).toHaveAttribute("type", "button");
		expect(button).toHaveClass("flex justify-center items-center absolute");

		expect(buttonSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(buttonSVG).toHaveAttribute("fill", "none");
		expect(buttonSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(buttonSVG).toHaveAttribute("stroke-width", "3");
		expect(buttonSVG).toHaveAttribute("stroke", "currentColor");
		expect(buttonSVG).toHaveClass("w-5 h-5");
	});

	it("Should handle events", async () => {
		// Rerender the target component
		render(<Asidebar setIsAside={mockFunction} />);

		act(() => fireEvent.click(button));

		await waitFor(() => {
			expect(mockFunction).toBeCalled();
			expect(mockFunction).toBeCalledTimes(1);
			expect(mockFunction).toBeCalledWith(false);

			expect(button).toBeInTheDocument();
			expect(buttonSVG).toBeInTheDocument();

			expect(screen.getByTestId("asidebar-backdrop")).toHaveClass("-right-full");
			expect(screen.getByTestId("asidebar-container")).toHaveClass("-left-60");
		});
	});
});

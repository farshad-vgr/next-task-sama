import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import { CloseButton, Asidebar } from "../components/index.ts";

describe("CloseButton", () => {
	let button,
		buttonSVG,
		setIsAside = jest.fn(); // This is a mock function

	beforeEach(() => {
		render(<CloseButton setIsAside={setIsAside} />);

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
		// Render the target component
		render(<Asidebar setIsAside={setIsAside} />);

		act(() => fireEvent.click(button));

		await waitFor(() => {
			expect(setIsAside).toBeCalled();
			expect(setIsAside).toBeCalledTimes(1);
			expect(setIsAside).toBeCalledWith(false);

			expect(button).toBeInTheDocument();
			expect(buttonSVG).toBeInTheDocument();

			expect(screen.getByTestId("asidebar-backdrop")).toHaveClass("-right-full");
			expect(screen.getByTestId("asidebar-container")).toHaveClass("-left-60");
		});
	});
});

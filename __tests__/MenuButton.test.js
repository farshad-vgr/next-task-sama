import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import { MenuButton } from "../components/index.ts";

describe("MenuButton", () => {
	let button, buttonSVG;

	beforeEach(() => {
		render(<MenuButton />);

		button = screen.getByTestId("menu-button");
		buttonSVG = screen.getByTestId("menu-button-svg");
	});

	it("Should render all elements", () => {
		expect(button).toBeInTheDocument();
		expect(buttonSVG).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(button).toBeEnabled();
		expect(button).toHaveAttribute("type", "button");
		expect(button).toHaveClass("flex justify-center items-center absolute hover:cursor-pointer");

		expect(buttonSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(buttonSVG).toHaveAttribute("fill", "none");
		expect(buttonSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(buttonSVG).toHaveAttribute("stroke-width", "3");
		expect(buttonSVG).toHaveAttribute("stroke", "currentColor");
		expect(buttonSVG).toHaveClass("w-6 h-6");
	});

	it("Should handle events", async () => {
		const mockFunction = jest.fn().mockName("setIsAside"); // This is a mock function

		act(() => {
			fireEvent.click(button);
			mockFunction(true);
		});

		await waitFor(() => {
			expect(mockFunction).toBeCalled();
			expect(mockFunction).toBeCalledTimes(1);
			expect(mockFunction).toBeCalledWith(true);

			expect(Object.keys(mockFunction.mock).includes("calls")).toBeTruthy();
			expect(mockFunction.mock.calls).toHaveLength(1);
			expect(mockFunction.mock.calls[0][0]).toBeTruthy();
			expect(mockFunction.mock.results[0].value).toBeUndefined();
		});

		expect(button).not.toBeInTheDocument();
		expect(buttonSVG).not.toBeInTheDocument();

		expect(screen.getByTestId("asidebar-backdrop")).toHaveClass("right-0");
		expect(screen.getByTestId("asidebar-container")).toHaveClass("left-0");
	});
});

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

import { SearchButton, SearchInput } from "../components/index.ts";

describe("SearchButton", () => {
	let button, buttonSVG;

	beforeEach(() => {
		render(<SearchButton />);

		button = screen.getByTestId("search-button");
		buttonSVG = screen.getByTestId("search-button-svg");
	});

	it("Should render all elements", () => {
		expect(button).toBeInTheDocument();
		expect(buttonSVG).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(button).toBeEnabled();
		expect(button).toHaveAttribute("type", "button");
		expect(button).toHaveClass("w-10 min-h-[2.5rem] hover:cursor-pointer");

		expect(buttonSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(buttonSVG).toHaveAttribute("fill", "none");
		expect(buttonSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(buttonSVG).toHaveAttribute("stroke-width", "3");
		expect(buttonSVG).toHaveAttribute("stroke", "currentColor");
		expect(buttonSVG).toHaveClass("absolute w-6 h-6");
	});

	it("Should handle events", async () => {
		render(<SearchInput />);

		const searchInput = screen.getByTestId("search-input");

		act(() => fireEvent.click(button));

		await waitFor(() => {
			expect(button).toHaveClass("w-52 sm:w-80 min-h-[2.5rem] hover:cursor-pointer");

			expect(searchInput).toBeInTheDocument();
			expect(searchInput).toHaveTextContent("");
			expect(searchInput).toHaveAttribute("type", "text");
			expect(searchInput).toHaveAttribute("placeholder", "جستجو...");
			expect(searchInput).toHaveAttribute("value", "");
			expect(searchInput).toHaveAttribute("maxlength", "15");
			expect(searchInput).toHaveClass("absolute w-[80%] sm:w-[88%] h-[2rem] outline-none");
		});
	});
});

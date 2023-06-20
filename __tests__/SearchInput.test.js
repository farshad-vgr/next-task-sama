import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SearchInput } from "../components/index.ts";

describe("SearchInput", () => {
	let searchInput;

	const hospitals = [
			{
				id: 1,
				title: "title",
				link: "https://www.test.com",
			},
		],
		searchValue = "entered text",
		mockSetSearchValue = jest.fn().mockName("setSearchValue"),
		mockSetResult = jest.fn().mockName("setResults");

	beforeEach(() => {
		render(<SearchInput hospitals={hospitals} searchValue={searchValue} setSearchValue={mockSetSearchValue} setResults={mockSetResult} />);

		searchInput = screen.getByTestId("search-input");
	});

	it("Should render all elements", () => {
		expect(searchInput).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(searchInput).toHaveAttribute("type", "text");
		expect(searchInput).toHaveAttribute("placeholder", "جستجو...");
		expect(searchInput).toHaveAttribute("value", "entered text");
		expect(searchInput).toHaveAttribute("maxlength", "15");
		expect(searchInput).toHaveClass("absolute w-[80%] sm:w-[88%] h-[2rem] outline-none");
	});

	it("Should handle events", async () => {
		fireEvent.change(searchInput, {
			target: {
				searchValue,
			},
		});

		await waitFor(() => {
			mockSetSearchValue(searchValue);

			expect(mockSetSearchValue).toBeCalled();
			expect(mockSetSearchValue).toBeCalledTimes(1);
			expect(mockSetSearchValue).toBeCalledWith("entered text");
		});
	});
});

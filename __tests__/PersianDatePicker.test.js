import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { PersianDatePicker } from "../components/index.ts";

describe("PersianDatePicker", () => {
	let persianDatePicker, persianDatePickerSVG, persianDatePickerLabel;

	const placeholder = "انتخاب تاریخ",
		bookingFormValues = {
			firstName: "",
			lastName: "",
			gender: "male",
			insurance: false,
			date: "",
		};
	mockSetBookingValues = jest.fn().mockName("setInputValue");

	beforeEach(() => {
		render(<PersianDatePicker bookingFormValues={bookingFormValues} setBookingFormValues={mockSetBookingValues} placeHolder={placeholder} />);

		persianDatePicker = screen.getByTestId("persian-date-picker");
		persianDatePickerSVG = screen.getByTestId("persian-date-picker-svg");
		persianDatePickerLabel = screen.getByTestId("persian-date-picker-label");
	});

	it("Should render all elements", () => {
		expect(persianDatePicker).toBeInTheDocument();
		expect(persianDatePickerSVG).toBeInTheDocument();
		expect(persianDatePickerLabel).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(persianDatePicker).toHaveTextContent(placeholder);
		expect(persianDatePicker).toHaveClass("flex justify-start items-center h-10 outline-none");

		expect(persianDatePickerSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(persianDatePickerSVG).toHaveAttribute("fill", "none");
		expect(persianDatePickerSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(persianDatePickerSVG).toHaveAttribute("stroke-width", "1.5");
		expect(persianDatePickerSVG).toHaveAttribute("stroke", "currentColor");
		expect(persianDatePickerSVG).toHaveClass("w-6 h-6");

		expect(persianDatePickerLabel).toHaveTextContent(placeholder);
		expect(persianDatePickerLabel).toHaveClass("text-gray-400");
	});
});

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BookingFirstName } from "../components/index.ts";

describe("BookingFirstName", () => {
	let bookingFirstNameInput, bookingFirstNameInputSVG;

	const inputValue = "entered text";
	const bookingFormValues = {
		firstName: "",
		lastName: "",
		gender: "male",
		insurance: false,
		date: "",
	};
	const mockSetBookingFormValues = jest.fn().mockName("setBookingFormValues");

	beforeEach(() => {
		render(<BookingFirstName bookingFormValues={bookingFormValues} setBookingFormValues={mockSetBookingFormValues} placeHolder="نام" />);

		bookingFirstNameInput = screen.getByTestId("booking-firstname-input");
		bookingFirstNameInputSVG = screen.getByTestId("booking-firstname-input-svg");
	});

	it("Should render all elements", () => {
		expect(bookingFirstNameInput).toBeInTheDocument();
		expect(bookingFirstNameInputSVG).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(bookingFirstNameInput).toHaveAttribute("type", "text");
		expect(bookingFirstNameInput).toHaveAttribute("placeholder", "نام");
		expect(bookingFirstNameInput).toHaveAttribute("value", "");
		expect(bookingFirstNameInput).toHaveAttribute("minlength", "3");
		expect(bookingFirstNameInput).toHaveAttribute("maxlength", "15");
		expect(bookingFirstNameInput).toHaveClass("w-full h-10 outline-none");

		expect(bookingFirstNameInputSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(bookingFirstNameInputSVG).toHaveAttribute("fill", "none");
		expect(bookingFirstNameInputSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(bookingFirstNameInputSVG).toHaveAttribute("stroke-width", "1.5");
		expect(bookingFirstNameInputSVG).toHaveAttribute("stroke", "currentColor");
		expect(bookingFirstNameInputSVG).toHaveClass("w-6 h-6");
	});

	it("Should handle events", async () => {
		fireEvent.change(bookingFirstNameInput, {
			target: {
				inputValue,
			},
		});

		await waitFor(() => {
			mockSetBookingFormValues();

			expect(mockSetBookingFormValues).toBeCalled();
			expect(mockSetBookingFormValues).toBeCalledWith();
		});
	});
});

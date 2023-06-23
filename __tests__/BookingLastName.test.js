import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BookingLastName } from "../components/index.ts";

describe("BookingLastName", () => {
	let bookingLastNameInput, bookingLastNameInputSVG;

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
		render(<BookingLastName bookingFormValues={bookingFormValues} setBookingFormValues={mockSetBookingFormValues} placeHolder="نام خانوادگی" />);

		bookingLastNameInput = screen.getByTestId("booking-lastname-input");
		bookingLastNameInputSVG = screen.getByTestId("booking-lastname-input-svg");
	});

	it("Should render all elements", () => {
		expect(bookingLastNameInput).toBeInTheDocument();
		expect(bookingLastNameInputSVG).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(bookingLastNameInput).toHaveAttribute("type", "text");
		expect(bookingLastNameInput).toHaveAttribute("placeholder", "نام خانوادگی");
		expect(bookingLastNameInput).toHaveAttribute("value", "");
		expect(bookingLastNameInput).toHaveAttribute("minlength", "3");
		expect(bookingLastNameInput).toHaveAttribute("maxlength", "15");
		expect(bookingLastNameInput).toHaveClass("w-full h-10 outline-none");

		expect(bookingLastNameInputSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
		expect(bookingLastNameInputSVG).toHaveAttribute("fill", "none");
		expect(bookingLastNameInputSVG).toHaveAttribute("viewBox", "0 0 24 24");
		expect(bookingLastNameInputSVG).toHaveAttribute("stroke-width", "1.5");
		expect(bookingLastNameInputSVG).toHaveAttribute("stroke", "currentColor");
		expect(bookingLastNameInputSVG).toHaveClass("w-6 h-6");
	});

	it("Should handle events", async () => {
		fireEvent.change(bookingLastNameInput, {
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

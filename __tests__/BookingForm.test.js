import { act } from "react-dom/test-utils";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BookingForm } from "../components/index.ts";

describe("SignupForm", () => {
	let bookingForm, bookingFirstNameInput, bookingLastNameInput, bookingGender, bookingInsurance, persianDatePicker, bookingButton;

	const mockFunction = jest.fn().mockName("setFormDownloadable");

	beforeEach(() => {
		render(<BookingForm />);

		bookingForm = screen.getByTestId("booking-form");
		bookingFirstNameInput = screen.getByTestId("booking-firstname-input");
		bookingLastNameInput = screen.getByTestId("booking-lastname-input");
		bookingGender = screen.getByTestId("booking-gender-container");
		bookingInsurance = screen.getByTestId("booking-insurance-container");
		persianDatePicker = screen.getByTestId("persian-date-picker");
		bookingButton = screen.getByTestId("booking-button");
	});

	it("Should render all elements", () => {
		expect(bookingForm).toBeInTheDocument();
		expect(bookingFirstNameInput).toBeInTheDocument();
		expect(bookingLastNameInput).toBeInTheDocument();
		expect(bookingGender).toBeInTheDocument();
		expect(bookingInsurance).toBeInTheDocument();
		expect(persianDatePicker).toBeInTheDocument();
		expect(bookingButton).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(bookingForm).toHaveClass("flex flex-col justify-center w-full");
	});

	it("Should handle events", async () => {
		act(() => {
			fireEvent.submit(bookingForm);
		});

		await waitFor(() => {
			mockFunction(true);

			expect(mockFunction).toBeCalled();
			expect(mockFunction).toBeCalledWith(true);
		});
	});
});

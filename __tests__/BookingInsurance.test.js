import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BookingInsurance } from "../components/index.ts";

describe("BookingInsurance", () => {
	let bookingInsuranceContainer,
		bookingInsuranceTitle,
		bookingInsuranceInputOne,
		bookingInsuranceLabelOne,
		bookingInsuranceInputTwo,
		bookingInsuranceLabelTwo;
	const bookingFormValues = {
		firstName: "",
		lastName: "",
		gender: "male",
		insurance: false,
		date: "",
	};
	const mockSetBookingFormValues = jest.fn().mockName("setBookingFormValues");

	beforeEach(() => {
		render(<BookingInsurance bookingFormValues={bookingFormValues} setBookingFormValues={mockSetBookingFormValues} />);

		bookingInsuranceContainer = screen.getByTestId("booking-insurance-container");
		bookingInsuranceTitle = screen.getByTestId("booking-insurance-title");
		bookingInsuranceInputOne = screen.getByTestId("booking-insurance-input-one");
		bookingInsuranceLabelOne = screen.getByTestId("booking-insurance-label-one");
		bookingInsuranceInputTwo = screen.getByTestId("booking-insurance-input-two");
		bookingInsuranceLabelTwo = screen.getByTestId("booking-insurance-label-two");
	});

	it("Should render all elements", () => {
		expect(bookingInsuranceContainer).toBeInTheDocument();
		expect(bookingInsuranceTitle).toBeInTheDocument();
		expect(bookingInsuranceInputOne).toBeInTheDocument();
		expect(bookingInsuranceLabelOne).toBeInTheDocument();
		expect(bookingInsuranceInputTwo).toBeInTheDocument();
		expect(bookingInsuranceLabelTwo).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(bookingInsuranceContainer).toHaveClass("relative flex justify-start w-full overflow-hidden");

		expect(bookingInsuranceTitle).toHaveTextContent("بیمه درمانی");

		expect(bookingInsuranceInputOne).toHaveAttribute("type", "radio");
		expect(bookingInsuranceInputOne).toHaveAttribute("id", "false");
		expect(bookingInsuranceInputOne).toHaveAttribute("name", "insurance");
		expect(bookingInsuranceInputOne).toHaveAttribute("value", "false");

		expect(bookingInsuranceLabelOne).toHaveAttribute("for", "false");
		expect(bookingInsuranceLabelOne).toHaveTextContent("ندارد");

		expect(bookingInsuranceInputTwo).toHaveAttribute("type", "radio");
		expect(bookingInsuranceInputTwo).toHaveAttribute("id", "true");
		expect(bookingInsuranceInputTwo).toHaveAttribute("name", "insurance");
		expect(bookingInsuranceInputTwo).toHaveAttribute("value", "true");

		expect(bookingInsuranceLabelTwo).toHaveAttribute("for", "true");
		expect(bookingInsuranceLabelTwo).toHaveTextContent("دارد");
	});

	it("Should handle events", async () => {
		fireEvent.click(bookingInsuranceInputOne);

		await waitFor(() => {
			mockSetBookingFormValues();

			expect(mockSetBookingFormValues).toBeCalled();

			expect(bookingInsuranceInputOne).toBeChecked();
			expect(bookingInsuranceInputTwo).not.toBeChecked();
		});

		fireEvent.click(bookingInsuranceInputTwo);

		await waitFor(() => {
			mockSetBookingFormValues();

			expect(mockSetBookingFormValues).toBeCalled();

			expect(bookingInsuranceInputOne).not.toBeChecked();
			expect(bookingInsuranceInputTwo).toBeChecked();
		});
	});
});

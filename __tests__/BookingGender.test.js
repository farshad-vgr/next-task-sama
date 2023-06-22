import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BookingGender } from "../components/index.ts";

describe("BookingGender", () => {
	let bookingGenderContainer, bookingGenderTitle, bookingGenderInputOne, bookingGenderLabelOne, bookingGenderInputTwo, bookingGenderLabelTwo;
	const bookingFormValues = {
		firstName: "",
		lastName: "",
		gender: "male",
		insurance: false,
		date: "",
	};
	const mockSetBookingFormValues = jest.fn().mockName("setBookingFormValues");

	beforeEach(() => {
		render(<BookingGender bookingFormValues={bookingFormValues} setBookingFormValues={mockSetBookingFormValues} />);

		bookingGenderContainer = screen.getByTestId("booking-gender-container");
		bookingGenderTitle = screen.getByTestId("booking-gender-title");
		bookingGenderInputOne = screen.getByTestId("booking-gender-input-one");
		bookingGenderLabelOne = screen.getByTestId("booking-gender-label-one");
		bookingGenderInputTwo = screen.getByTestId("booking-gender-input-two");
		bookingGenderLabelTwo = screen.getByTestId("booking-gender-label-two");
	});

	it("Should render all elements", () => {
		expect(bookingGenderContainer).toBeInTheDocument();
		expect(bookingGenderTitle).toBeInTheDocument();
		expect(bookingGenderInputOne).toBeInTheDocument();
		expect(bookingGenderLabelOne).toBeInTheDocument();
		expect(bookingGenderInputTwo).toBeInTheDocument();
		expect(bookingGenderLabelTwo).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(bookingGenderContainer).toHaveClass("relative flex justify-start w-full overflow-hidden");

		expect(bookingGenderTitle).toHaveTextContent("جنسیت");

		expect(bookingGenderInputOne).toHaveAttribute("type", "radio");
		expect(bookingGenderInputOne).toHaveAttribute("id", "male");
		expect(bookingGenderInputOne).toHaveAttribute("name", "gender");
		expect(bookingGenderInputOne).toHaveAttribute("value", "male");
		expect(bookingGenderInputOne).toBeChecked();
		expect(bookingGenderInputOne["checked"]).toBeTruthy();
		expect(bookingGenderInputOne["_wrapperState"]["initialChecked"]).toBeTruthy();

		expect(bookingGenderLabelOne).toHaveAttribute("for", "male");
		expect(bookingGenderLabelOne).toHaveTextContent("مرد");

		expect(bookingGenderInputTwo).toHaveAttribute("type", "radio");
		expect(bookingGenderInputTwo).toHaveAttribute("id", "female");
		expect(bookingGenderInputTwo).toHaveAttribute("name", "gender");
		expect(bookingGenderInputTwo).toHaveAttribute("value", "female");
		expect(bookingGenderInputTwo).not.toBeChecked();
		expect(bookingGenderInputTwo["checked"]).toBeFalsy();
		expect(bookingGenderInputTwo["_wrapperState"]["initialChecked"]).toBeFalsy();

		expect(bookingGenderLabelTwo).toHaveAttribute("for", "female");
		expect(bookingGenderLabelTwo).toHaveTextContent("زن");
	});

	it("Should handle events", async () => {
		fireEvent.click(bookingGenderInputOne);

		await waitFor(() => {
			mockSetBookingFormValues();

			expect(mockSetBookingFormValues).toBeCalled();

			expect(bookingGenderInputOne).toBeChecked();
			expect(bookingGenderInputTwo).not.toBeChecked();
		});

		fireEvent.click(bookingGenderInputTwo);

		await waitFor(() => {
			mockSetBookingFormValues();

			expect(mockSetBookingFormValues).toBeCalled();

			expect(bookingGenderInputOne).not.toBeChecked();
			expect(bookingGenderInputTwo).toBeChecked();
		});
	});
});

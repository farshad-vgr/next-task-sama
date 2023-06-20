import { act } from "react-dom/test-utils";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";

import { ConfirmForm } from "../components/index.ts";

jest.mock("next/compat/router", () => require("next-router-mock"));

describe("ConfirmForm", () => {
	let confirmForm, confirmInput, confirmButton;

	beforeEach(() => {
		render(<ConfirmForm />);

		confirmForm = screen.getByTestId("confirm-form");
		confirmInput = screen.getByTestId("confirm-input");
		confirmButton = screen.getByTestId("confirm-button");
	});

	it("Should render all elements", () => {
		expect(confirmForm).toBeInTheDocument();
		expect(confirmInput).toBeInTheDocument();
		expect(confirmButton).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(confirmForm).toHaveClass("flex flex-col justify-center w-full");
	});

	it("Should handle events", async () => {
		act(() => fireEvent.submit(confirmForm));

		await waitFor(() =>
			expect(mockRouter).toMatchObject({
				asPath: "/booking",
				pathname: "/booking",
			}),
		);
	});
});

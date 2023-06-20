import { act } from "react-dom/test-utils";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";

import { SignupForm } from "../components/index.ts";

jest.mock("next/router", () => require("next-router-mock"));

describe("SignupForm", () => {
	let signupForm;

	beforeEach(() => {
		render(<SignupForm />);

		signupForm = screen.getByTestId("signup-form");
	});

	it("Should render all elements", () => {
		expect(signupForm).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(signupForm).toHaveClass("flex flex-col justify-center w-full");
	});

	it("Should handle events", async () => {
		act(() => fireEvent.submit(signupForm));

		await waitFor(() =>
			expect(mockRouter).toMatchObject({
				asPath: "/confirmation",
				pathname: "/confirmation",
			}),
		);
	});
});

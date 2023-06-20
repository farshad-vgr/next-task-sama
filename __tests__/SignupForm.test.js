import { act } from "react-dom/test-utils";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";

import { CaptchaBox, SignupForm, SignupInput, SubmitButton } from "../components/index.ts";

jest.mock("next/router", () => require("next-router-mock"));

describe("SignupForm", () => {
	let signupForm, signupInput, captchaBox, submitButton;

	beforeEach(() => {
		render(<SignupForm />);

		signupForm = screen.getByTestId("signup-form");
		signupInput = screen.getByTestId("signup-input");
		captchaBox = screen.getByTestId("captcha-box");
		submitButton = screen.getByTestId("submit-button");
	});

	it("Should render all elements", () => {
		expect(signupForm).toBeInTheDocument();
		expect(signupInput).toBeInTheDocument();
		expect(captchaBox).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
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

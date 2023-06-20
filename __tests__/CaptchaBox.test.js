import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CaptchaBox } from "../components/index.ts";

describe("CaptchaBox", () => {
	let captchaBox, captchaBoxDisabler;
   const mockFunction = jest.fn().mockName("setIsCaptchaValid");

	beforeEach(() => {
		render(<CaptchaBox setIsCaptchaValid={mockFunction} inputValue="" />);

		captchaBox = screen.getByTestId("captcha-box");
		captchaBoxDisabler = screen.getByTestId("captcha-box-disabler");
	});

	it("Should render all elements", () => {
		expect(captchaBox).toBeInTheDocument();
		expect(captchaBoxDisabler).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(captchaBox).toHaveClass("relative self-center captcha-box");
		expect(captchaBoxDisabler).toHaveClass("absolute w-full h-full cursor-not-allowed z-[5]");
	});

	it("Should validate elements props when the button is disable", () => {
		expect(captchaBox).toHaveClass("opacity-50");
		expect(captchaBoxDisabler).toHaveClass("block");
	});

	it("Should validate elements props when the button is enable", () => {
		cleanup();

		// Rerender the target component with new props after a cleanup function
		render(<CaptchaBox setIsCaptchaValid={mockFunction} inputValue="entered text" />);

		const captchaBox = screen.getByTestId("captcha-box");
		const captchaBoxDisabler = screen.getByTestId("captcha-box-disabler");

		expect(captchaBox).not.toHaveClass("opacity-50");
		expect(captchaBoxDisabler).not.toHaveClass("block");
		expect(captchaBoxDisabler).toHaveClass("hidden");
	});
});

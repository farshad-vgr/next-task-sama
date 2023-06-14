import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ConfirmButton from "../components/ConfirmButton/ConfirmButton";

describe("ConfirmButton", () => {
	it("Rendered?", () => {
		render(<ConfirmButton btnText="تایید" isDisable={true} />);

		const button = screen.getByTestId("confirm-button");
		const buttonSVG = screen.getByTestId("confirm-button-svg");
		const buttonSpan = screen.getByTestId("confirm-button-span");

		expect(button).toBeInTheDocument();
		expect(buttonSVG).toBeInTheDocument();
    expect(buttonSpan).toBeInTheDocument();
  });

  it("Has initial props?", () => {
		render(<ConfirmButton btnText="تایید" isDisable={true} />);

    const button = screen.getByTestId("confirm-button");
    const buttonSVG = screen.getByTestId("confirm-button-svg");
		const buttonSpan = screen.getByTestId("confirm-button-span");
    
		expect(button).toBeDisabled();
		expect(button).toHaveAttribute("disabled");
		expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveClass("flex justify-center items-center self-center max-w-fit outline-none");
		
    expect(buttonSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
    expect(buttonSVG).toHaveAttribute("fill", "none");
    expect(buttonSVG).toHaveAttribute("viewBox", "0 0 24 24");
    expect(buttonSVG).toHaveAttribute("stroke-width", "1.5");
    expect(buttonSVG).toHaveAttribute("stroke", "currentColor");
    expect(buttonSVG).toHaveClass("w-6 h-6");

    expect(buttonSpan).toHaveTextContent("تایید");
    expect(buttonSpan).toHaveClass("mt-2");
	});
  
  it("Has disable props?", () => {
		render(<ConfirmButton btnText="تایید" isDisable={true} />);

		const button = screen.getByTestId("confirm-button");

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("disabled");
    expect(button).toHaveClass("cursor-not-allowed opacity-50");
  });
  
  it("Has enable props?", () => {
		render(<ConfirmButton btnText="تایید" isDisable={false} />);

		const button = screen.getByTestId("confirm-button");

    expect(button).toBeEnabled();
    expect(button).not.toHaveAttribute("disabled");
    expect(button).toHaveClass("cursor-pointer");
	});
});

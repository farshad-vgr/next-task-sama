import { render } from "@testing-library/react";

import { ConfirmButton, CloseButton } from "../components/index.ts";

describe("Snapshot Testing", () => {
	it("Renderes ConfirmButton unchanged?", () => {
		const { container } = render(<ConfirmButton btnText="تایید" isDisable={true} />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes CloseButton unchanged?", () => {
		const { container } = render(<CloseButton />);
		expect(container).toMatchSnapshot();
	});
});

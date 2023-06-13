import { render } from "@testing-library/react";

import ConfirmButton from "../components/ConfirmButton/ConfirmButton";

describe("Snapshot Testing", () => {
	it("Renderes ConfirmButton unchanged?", () => {
		const { container } = render(<ConfirmButton btnText="تایید" isDisable={true} />);
		expect(container).toMatchSnapshot();
	});
});

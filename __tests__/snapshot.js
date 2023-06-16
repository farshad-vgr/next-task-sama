import { render } from "@testing-library/react";

import { ConfirmButton, CloseButton, MenuButton, Asidebar, SearchButton, JumperButton } from "../components/index.ts";

describe("Snapshot Testing", () => {
	it("Renderes ConfirmButton unchanged?", () => {
		const { container } = render(<ConfirmButton btnText="تایید" isDisable={true} />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes CloseButton unchanged?", () => {
		const { container } = render(<CloseButton />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes MenuButton unchanged?", () => {
		const { container } = render(<MenuButton />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes Asidebar unchanged?", () => {
		const { container } = render(<Asidebar isAside={false} setIsAside={jest.fn()} />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes SearchButton unchanged?", () => {
		const { container } = render(<SearchButton />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes JumperButton unchanged?", () => {
		const { container } = render(<JumperButton />);
		expect(container).toMatchSnapshot();
	});
});

import { render } from "@testing-library/react";

import {
	SubmitButton,
	ConfirmButton,
	BookingButton,
	CloseButton,
	MenuButton,
	Asidebar,
	SearchButton,
	SearchInput,
	JumperButton,
	GeneratePdfButton,
} from "../components/index.ts";

describe("Snapshot Testing", () => {
	it("Renderes SubmitButton unchanged?", () => {
		const { container } = render(<SubmitButton btnText="ورود" isCaptchaValid={false} />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes ConfirmButton unchanged?", () => {
		const { container } = render(<ConfirmButton btnText="تایید" isDisable={true} />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes BookingButton unchanged?", () => {
		const { container } = render(<BookingButton btnText="ثبت نوبت" isDisable={true} />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes GeneratePdfButton unchanged?", () => {
		const { container } = render(<GeneratePdfButton btnText="دانلود فرم" isDisable={true} />);
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
		const { container } = render(<Asidebar isAside={false} />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes SearchButton unchanged?", () => {
		const { container } = render(<SearchButton />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes SearchInput unchanged?", () => {
		const { container } = render(<SearchInput />);
		expect(container).toMatchSnapshot();
	});

	it("Renderes JumperButton unchanged?", () => {
		const { container } = render(<JumperButton />);
		expect(container).toMatchSnapshot();
	});
});

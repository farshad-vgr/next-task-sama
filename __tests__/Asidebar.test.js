import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Asidebar from "../components/Asidebar/Asidebar";

describe("Asidebar", () => {
	let asidebarBackdrop,
		asidebarContainer,
		asidebarSearchButtonWrapper,
		asidebarNavbarWrapper,
		setIsAside = jest.fn(); // This is a mock function

	beforeAll(() => {
		// Render the component with default props
		render(<Asidebar isAside={false} setIsAside={setIsAside} />);

		asidebarBackdrop = screen.getByTestId("asidebar-backdrop");
		asidebarContainer = screen.getByTestId("asidebar-container");
		asidebarSearchButtonWrapper = screen.getByTestId("asidebar-search-button-wrapper");
		asidebarNavbarWrapper = screen.getByTestId("asidebar-navbar-wrapper");
	});

	it("Should render all elements", () => {
		expect(asidebarBackdrop).toBeInTheDocument();
		expect(asidebarContainer).toBeInTheDocument();
		expect(asidebarSearchButtonWrapper).toBeInTheDocument();
		expect(asidebarNavbarWrapper).toBeInTheDocument();
	});

	it("Should validate elements props", () => {
		expect(asidebarBackdrop).toHaveClass("absolute top-0 w-full h-full z-10");
		expect(asidebarContainer).toHaveClass("absolute top-0 w-60 h-full z-10");
		expect(asidebarSearchButtonWrapper).toHaveClass("absolute");
	});

	it("Should validate elements props when the Asidebar is hidden", () => {
		expect(asidebarBackdrop).toHaveClass("-right-full");
		expect(asidebarContainer).toHaveClass("-left-60");
	});

	it("Should validate elements props when the Asidebar is visible", () => {
		// Render the component with new props then get elements
		render(<Asidebar isAside={true} setIsAside={setIsAside} />);

		const asidebarBackdrop = screen.getByTestId("asidebar-backdrop");
		const asidebarContainer = screen.getByTestId("asidebar-container");

		expect(asidebarBackdrop).toHaveClass("right-0");
		expect(asidebarContainer).toHaveClass("left-0");
	});

	it("Should handle events", () => {
    fireEvent.click(asidebarBackdrop);

		expect(asidebarBackdrop).toHaveClass("-right-full");
    expect(asidebarContainer).toHaveClass("-left-60");

		fireEvent.click(asidebarNavbarWrapper);

		expect(asidebarBackdrop).toHaveClass("-right-full");
		expect(asidebarContainer).toHaveClass("-left-60");
	});
});

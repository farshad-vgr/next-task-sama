import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import Asidebar from "../components/Asidebar/Asidebar";

describe("Asidebar", () => {
	let asidebarBackdrop,
		asidebarContainer,
		asidebarSearchButtonWrapper,
		asidebarNavbarWrapper,
		setIsAside = jest.fn(); // This is a mock function

	beforeEach(() => {
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
		cleanup();

		// Rerender the target component with new props after a cleanup function
		render(<Asidebar isAside={true} setIsAside={setIsAside} />);

		expect(screen.getByTestId("asidebar-backdrop")).toHaveClass("right-0");
		expect(screen.getByTestId("asidebar-container")).toHaveClass("left-0");
	});

	it("Should handle events on sidebar-backdrop click", async () => {
		cleanup();

		// Rerender the target component after a cleanup function
		render(<Asidebar setIsAside={setIsAside} />);

		act(() => fireEvent.click(screen.getByTestId("asidebar-backdrop")));

		await waitFor(() => {
			expect(setIsAside).toBeCalled();
			expect(setIsAside).toBeCalledTimes(1);
			expect(setIsAside).toBeCalledWith(false);

			expect(screen.getByTestId("asidebar-backdrop")).toHaveClass("-right-full");
			expect(screen.getByTestId("asidebar-container")).toHaveClass("-left-60");
		});
	});

	it("Should handle events on asidebar-navbar-wrapper click", async () => {
		cleanup();

		// Rerender the target component after a cleanup function
		render(<Asidebar setIsAside={setIsAside} />);

		act(() => fireEvent.click(screen.getByTestId("asidebar-navbar-wrapper")));

		await waitFor(() => {
			expect(setIsAside).toBeCalled();
			expect(setIsAside).toBeCalledTimes(2);
			expect(setIsAside).toBeCalledWith(false);

			expect(screen.getByTestId("asidebar-backdrop")).toHaveClass("-right-full");
			expect(screen.getByTestId("asidebar-container")).toHaveClass("-left-60");
		});
	});
});

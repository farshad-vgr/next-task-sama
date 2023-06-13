import { useEffect, useState } from "react";
import { Header, Footer, JumperButton } from "../index";

interface Props {
	children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
	const [scrollTop, setScrollTop] = useState(0); // Hook for scrollbar position

	useEffect(() => {
		const scrollHandler = () => {
			setScrollTop(window.scrollY); // Get the window scroll value to show or hide the jumper button
		};

		window.addEventListener("scroll", scrollHandler);

		// Removing all event listeners to prevent memory leaks
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	return (
		<>
			<section className="relative">
				<Header />
					{children}
				<Footer />

				{/* Show or hide the jumper button depends on the scroll value */}
				{scrollTop > 200 ? <JumperButton buttonColor="red" /> : null}
			</section>
		</>
	);
}

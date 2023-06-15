import { CloseButton, SearchButton, Navbar } from "../index";

interface Props {
	isAside: boolean;
	setIsAside: (b: boolean) => void;
}

export default function Asidebar({ isAside, setIsAside }: Props) {
	return (
		<>
			<div
				data-testid="asidebar-backdrop"
				onClick={() => setIsAside(false)}
				className={`absolute top-0 ${
					isAside ? "right-0" : "-right-full"
				} w-full h-full bg-gray-900 bg-opacity-50 transition-all duration-500 z-10`}></div>

			<aside
				data-testid="asidebar-container"
				className={`absolute top-0 ${isAside ? "left-0" : "-left-60"} w-60 h-full bg-gray-900 bg-opacity-80 transition-all duration-700 z-10`}>
				<CloseButton setIsAside={setIsAside} />

				<div data-testid="asidebar-search-button-wrapper" className="absolute top-52 left-4">
					<SearchButton />
				</div>

				<section data-testid="asidebar-navbar-wrapper" className="mt-12 p-4" onClick={() => setIsAside(false)}>
					<Navbar direction="flex-col" />
				</section>
			</aside>
		</>
	);
}

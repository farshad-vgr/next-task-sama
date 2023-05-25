import { CloseButton, Navbar } from "../index";

interface Props {
	isAside: boolean;
	setIsAside: (b: boolean) => void;
}

export default function Asidebar({ isAside, setIsAside }: Props) {
	return (
		<>
			<div
				onClick={() => setIsAside(false)}
				className={`absolute top-0 ${isAside ? "right-0" : "-right-full"} w-full h-full bg-gray-900 bg-opacity-50 transition-all duration-500 z-10`}>
			</div>

			<aside className={`absolute top-0 ${isAside ? "left-0" : "-left-52"} w-52 h-full bg-gray-900 bg-opacity-80 transition-all duration-700 z-10`}>
				<CloseButton setIsAside={setIsAside} />

				<section className="mt-12 p-4">
					<Navbar direction="flex-col" />
				</section>
			</aside>
		</>
	);
}

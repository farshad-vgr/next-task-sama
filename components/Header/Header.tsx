import Image from "next/image";

import { Container, Navbar, SearchButton, MenuButton } from "../index";

export default function Header() {
	return (
		<>
			<header className="w-full h-[4.5rem] bg-slate-200">
				<div>
					<Container>
						<div className="hidden sm:block absolute top-1 left-1 z-10">
							<SearchButton />
						</div>

						<div className="hidden sm:block sm:absolute sm:top-12 sm:mr-6">
							<Navbar direction="flex-row" />
						</div>

						<div className="absolute top-0 right-3 md:right-5 mt-1">
							<Image src="/assets/images/logo.png" alt="Logo" width={120} height={100} />
						</div>

						<div className="block sm:hidden">
							<MenuButton />
						</div>
					</Container>
				</div>
			</header>
		</>
	);
}

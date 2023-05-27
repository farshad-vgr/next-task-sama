import Image from "next/image";

import { Container, Navbar, SearchButton, MenuButton } from "../index";
import LogoImage from "../../public/assets/images/logo.png";

export default function Header() {
	return (
		<>
			<header className="w-full h-[4.5rem] bg-slate-200">
				<div>
					<Container>
						<div className="hidden sm:block absolute top-1 left-1">
							<SearchButton />
						</div>

						<div className="hidden sm:block sm:absolute sm:top-12 sm:mr-6">
							<Navbar direction="flex-row" />
						</div>

						<div className="absolute top-0 right-3 md:right-5 w-28 mt-1">
							<Image src={LogoImage} alt="Logo" />
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

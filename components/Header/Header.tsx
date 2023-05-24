import Image from "next/image";

import { Container, Navbar, SearchButton, MenuButton } from "../index";
import LogoImage from "../../public/assets/images/logo.png";

export default function Header() {
	return (
		<>
			<header className="w-full h-[4rem] sm:h-[8rem]">
				<div className="w-full h-[4rem] sm:h-[8rem] bg-slate-200">
					<Container>
						<div className="hidden sm:block absolute top-3 left-5">
							<SearchButton />
						</div>

						<div className="hidden mt-14 sm:block">
							<Navbar direction="flex-row" />
						</div>

						<div className="absolute top-3 right-5">
							<Image src={LogoImage} width={200} height={100} alt="Logo" />
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

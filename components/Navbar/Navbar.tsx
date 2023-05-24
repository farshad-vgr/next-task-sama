import React from "react";
import { NavbarItem } from "../index";

interface Props {
	direction: string;
}

const itemsContent = [
	{
		id: 1,
		href: "/",
		svgPathD1:
			"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
		svgPathD2: "",
		textContent: "Home",
	},
	{
		id: 2,
		href: "/locations",
		svgPathD1: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
		svgPathD2: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
		textContent: "Locations",
	},
	{
		id: 3,
		href: "/stats",
		svgPathD1:
			"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
		svgPathD2: "",
		textContent: "Stats",
	},
	{
		id: 4,
		href: "/booking",
		svgPathD1:
			"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75",
		svgPathD2: "",
		textContent: "Booking",
	},
];

export default function Navbar({ direction }: Props) {
	return (
		<>
			<nav>
				<ul className={`flex ${direction} gap-5 sm:gap-10 md:gap-16 text-xl text-white`}>
					{itemsContent.map(({ id, href, svgPathD1, svgPathD2, textContent }) => {
						return <NavbarItem key={id} href={href} svgPathD1={svgPathD1} svgPathD2={svgPathD2} textContent={textContent} />;
					})}
				</ul>
			</nav>
		</>
	);
}

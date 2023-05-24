import Link from "next/link";

interface Props {
	href: string;
	svgPathD1: string;
	svgPathD2: string;
	textContent: string;
}

export default function NavbarItem({ href, svgPathD1, svgPathD2, textContent }: Props) {
	return (
		<>
			<li className="hover:text-red-300 hover:underline">
				<Link href={href}>
					<span className="flex gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="self-center w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d={svgPathD1} />
							<path strokeLinecap="round" strokeLinejoin="round" d={svgPathD2} />
						</svg>
						{textContent}
					</span>
				</Link>
			</li>
		</>
	);
}

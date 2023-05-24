import { Container, CopyRight } from "../index";

export default function Footer() {
	return (
		<>
			<footer className="w-full h-[2rem]">
				<div className="w-full h-full text-white bg-black">
					<Container>
						<CopyRight />
					</Container>
				</div>
			</footer>
		</>
	);
}

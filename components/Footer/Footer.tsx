import { Container, CopyRight } from "../index";

export default function Footer() {
	return (
		<>
			<footer className="w-full h-14 py-1">
				<div className="w-full h-full text-white bg-slate-600">
					<Container>
						<CopyRight />
					</Container>
				</div>
			</footer>
		</>
	);
}

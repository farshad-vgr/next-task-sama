import { Container, CopyRight } from "../index";

export default function Footer() {
	return (
		<>
			<footer className="w-full h-[40rem] bg-footerBackground bg-cover bg-[center_left_35%] bg-no-repeat">
				<div className="w-full h-[40rem] text-white bg-black bg-opacity-50 backdrop-blur-[1px]">
					<Container>
						<CopyRight />
					</Container>
				</div>
			</footer>
		</>
	);
}

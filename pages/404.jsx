export default function Custom404() {
	return (
		<>
			<section className="fixed inset-0 flex flex-col justify-center items-center w-[100vw] h-[100vh] text-2xl tracking-widest uppercase bg-white z-50">
				<lottie-player
					src="https://assets5.lottiefiles.com/packages/lf20_suhe7qtm.json"
					style={{ width: "20rem", height: "20rem" }}
					background="transparent"
					speed="2"
					loop
					autoplay></lottie-player>

				<h2>
					An <span className="font-bold text-red-500">Error</span> occurred, Try again!
				</h2>
			</section>
		</>
	);
}

interface Props {
  setIsAside: (b: boolean) => void;
}

export default function MenuButton({ setIsAside }: Props) {
	return (
		<>
			<section
				onClick={() => setIsAside(false)}
				className="flex justify-center items-center absolute top-3 left-5 w-7 h-7 mt-1 rounded-full text-base text-red-600 border border-red-600 shadow-[0_0_0.25rem_1px_inset] shadow-red-500">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</section>
		</>
	);
}

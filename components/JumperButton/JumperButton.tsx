interface Props {
	buttonColor: string;
}

// This button moves the scroll bar to the top of the page
export default function JumperButton({ buttonColor }: Props) {
	return (
		<>
			<button
				data-testid="jumper-button"
				type="button"
				onClick={() => window.scrollTo(0, 0)}
				title="برو به بالای صفحه!"
				className={`fixed bottom-3 right-3 p-1 text-${buttonColor}-500 bg-black bg-opacity-20 border-2 border-dashed rounded-full border-${buttonColor}-500 hover:bg-opacity-30 transition-all duration-300`}>
				<svg
					data-testid="jumper-button-svg"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
				</svg>
			</button>
		</>
	);
}

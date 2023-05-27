import React, { memo } from "react";

interface Props {
	btnText: string;
	isDisable: boolean;
}

const BookingButton = ({ btnText, isDisable }: Props): JSX.Element => {
	return (
		<>
			<button
				className={`submit-btn flex justify-center items-center self-center gap-1 max-w-fit px-3 outline-none rounded-lg ${
					isDisable ? "cursor-not-allowed text-black bg-slate-500 opacity-50" : "cursor-pointer text-white bg-green-500"
				}`}
				type="submit"
				disabled={isDisable}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
					/>
				</svg>

				<span className="mt-2">{btnText}</span>
			</button>
		</>
	);
};

export default memo(BookingButton);

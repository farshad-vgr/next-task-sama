import React, { memo } from "react";

interface Props {
	btnText: string;
	isDisable: boolean;
}

const ConfirmButton = ({ btnText, isDisable }: Props): JSX.Element => {
	return (
		<>
			<button
				className={`submit-btn flex justify-center items-center self-center gap-1 max-w-fit px-3 outline-none rounded-lg ${
					isDisable ? "cursor-not-allowed text-black bg-slate-500 opacity-50" : "cursor-pointer text-white bg-green-500"
				}`}
				type="submit"
				disabled={isDisable}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>

				<span className="mt-2">{btnText}</span>
			</button>
		</>
	);
};

export default memo(ConfirmButton);

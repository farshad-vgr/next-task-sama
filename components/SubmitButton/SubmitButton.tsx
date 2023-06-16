import React, { memo } from "react";

interface Props {
	btnText: string;
	isCaptchaValid: boolean;
}

const SubmitButton = ({ btnText, isCaptchaValid }: Props): JSX.Element => {
	return (
		<>
			<button
				data-testid="submit-button"
				className={`flex justify-center items-center self-center gap-1 max-w-fit px-3 py-[2px] outline-none rounded-lg ${
					isCaptchaValid ? "cursor-pointer text-white bg-green-500" : "cursor-not-allowed text-black bg-slate-500 opacity-50"
				}`}
				type="submit"
				disabled={!isCaptchaValid}>
				<svg
					data-testid="submit-button-svg"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
					/>
				</svg>

				<span data-testid="submit-button-span" className="mt-1">
					{btnText}
				</span>
			</button>
		</>
	);
};

export default memo(SubmitButton);

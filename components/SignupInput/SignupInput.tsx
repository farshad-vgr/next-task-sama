import React, { memo } from "react";

interface Props {
	inputValue: string;
	setInputValue: (e: string) => void;
	placeHolder: string;
}

const SignupInput = ({ inputValue, setInputValue, placeHolder }: Props): JSX.Element => {
	return (
		<>
			<section>
				<div className="relative flex justify-center w-full h-8 overflow-hidden">
					<div className="flex justify-center items-center absolute right-0 w-8 h-8 leading-8 outline-none text-white bg-red-700 border-b-[3px] border-b-red-700 rounded-[0_0.5rem_0_0]">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
							/>
						</svg>
					</div>

					<input
						className="py-2 px-4 pr-10 pb-0 w-full h-8 outline-none text-sm border-b-[3px] border-b-red-700 rounded-[0.5rem_0.5rem_0_0]"
						autoFocus
						required
						type="number"
						placeholder={placeHolder}
						minLength={3}
						maxLength={15}
						value={inputValue}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
					/>
				</div>
			</section>
		</>
	);
};

export default memo(SignupInput);

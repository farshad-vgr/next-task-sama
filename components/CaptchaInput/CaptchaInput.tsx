import React, { memo } from "react";

interface Props {
	username: string;
	placeHolder: string;
}

const CaptchaInput = ({ username, placeHolder }: Props): JSX.Element => {
	return (
		<>
			<section>
				<div className="relative flex justify-center w-full h-8 overflow-hidden">
					<div className="flex justify-center items-center absolute right-0 w-8 h-8 leading-8 outline-none text-white bg-red-700 border-b-[3px] border-b-red-700 rounded-[0_0.5rem_0_0]">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
							/>
						</svg>
					</div>

					<input
						className="py-2 px-4 pr-10 pb-0 w-full h-8 outline-none text-sm border-b-[3px] border-b-red-700 rounded-[0.5rem_0.5rem_0_0]"
						autoFocus
						type="text"
						placeholder={placeHolder}
						minLength={3}
						maxLength={15}
						value={username}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log("test")}
					/>
				</div>
			</section>
		</>
	);
};

export default memo(CaptchaInput);

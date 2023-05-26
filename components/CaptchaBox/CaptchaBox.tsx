import React, { memo } from "react";

// interface Props {
// 	username: string;
// 	placeHolder: string;
// }

const CaptchaBox = (): JSX.Element => {
	return (
		<>
			<section>
				<div className="relative flex justify-center w-full h-20 overflow-hidden">
					<div className="flex justify-center items-center absolute right-0 w-8 h-full outline-none text-white bg-red-700 border-b-[3px] border-b-red-700 rounded-[0_0.5rem_0_0]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 mt-[3px]">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
							/>
						</svg>
					</div>

					<div className="py-2 px-4 pr-10 pb-0 w-full outline-none text-sm border-b-[3px] border-b-red-700 rounded-[0.5rem_0.5rem_0_0] bg-slate-300"></div>

					<div className="flex justify-center items-center absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 outline-none text-red-700 hover:rotate-180 hover:scale-125 rounded-full cursor-pointer duration-500">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
							/>
						</svg>
					</div>
				</div>
			</section>
		</>
	);
};

export default memo(CaptchaBox);

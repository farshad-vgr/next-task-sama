import { memo } from "react";

import { SignupInput, CaptchaBox, CaptchaInput, SubmitButton } from "@/components";

const SignupForm = () => {
	return (
		<>
			<form
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					console.log("onSub");
					e.preventDefault();
				}}>
				<SignupInput username="" placeHolder="کدملی / شماره موبایل / شماره قبض" />

				<CaptchaBox />

				<CaptchaInput username="" placeHolder="کد امنیتی به عدد" />

				<SubmitButton btnText="ورود" />
			</form>
		</>
	);
};

export default memo(SignupForm);

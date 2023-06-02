import { memo, useState } from "react";
import { useRouter } from "next/router";

import { SignupInput, CaptchaBox, SubmitButton } from "@/components";

const SignupForm = () => {
	const router = useRouter();
	const [inputValue, setInputValue] = useState("");
	const [isCaptchaValid, setIsCaptchaValid] = useState(false);

	return (
		<>
			<form
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					inputValue.trim() !== "" ? router.push("/confirmation") : alert("فرم را پر کنید!");
				}}>
				<SignupInput inputValue={inputValue} setInputValue={setInputValue} placeHolder="کدملی / شماره موبایل / شماره قبض" />

				<CaptchaBox setIsCaptchaValid={setIsCaptchaValid} inputValue={inputValue} />

				<SubmitButton btnText="ورود" isCaptchaValid={isCaptchaValid} />
			</form>
		</>
	);
};

export default memo(SignupForm);

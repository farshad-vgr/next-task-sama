import { memo, useState } from "react";
import { useRouter } from "next/router";

import { SignupInput, CaptchaBox, CaptchaInput, SubmitButton } from "@/components";

const SignupForm = () => {
	const router = useRouter();
	const [inputValue, setInputValue] = useState("");
	const [isDisable, setIsDisable] = useState(true);

	return (
		<>
			<form
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					inputValue.trim() !== "" ? router.push("/confirmation") : alert("فرم را پر کنید!");
					console.log("input value: " + inputValue);
				}}>
				<SignupInput inputValue={inputValue} setInputValue={setInputValue} placeHolder="کدملی / شماره موبایل / شماره قبض" />

				<CaptchaBox setIsDisable={setIsDisable} inputValue={inputValue} />

				{/* <CaptchaInput username="" placeHolder="کد امنیتی به عدد" /> */}

				<SubmitButton btnText="ورود" isDisable={isDisable} />
			</form>
		</>
	);
};

export default memo(SignupForm);

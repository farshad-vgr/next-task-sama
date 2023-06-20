import { memo, useState } from "react";
import { useRouter } from "next/compat/router";

import { SignupInput, CaptchaBox, SubmitButton } from "../index";

const SignupForm = () => {
	const router = useRouter();
	const [inputValue, setInputValue] = useState("");
	const [isCaptchaValid, setIsCaptchaValid] = useState(false);

	return (
		<>
			<form
				data-testid="signup-form"
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e) => {
					e.preventDefault();
					router?.push("/confirmation");
				}}>
				<SignupInput inputValue={inputValue} setInputValue={setInputValue} />

				<CaptchaBox setIsCaptchaValid={setIsCaptchaValid} inputValue={inputValue} />

				<SubmitButton btnText="ورود" isCaptchaValid={isCaptchaValid} />
			</form>
		</>
	);
};

export default memo(SignupForm);

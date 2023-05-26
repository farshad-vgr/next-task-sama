import { memo, useState } from "react";
import { useRouter } from "next/router";

import { SignupInput, CaptchaBox, CaptchaInput, SubmitButton } from "@/components";

const SignupForm = () => {
	const router = useRouter();
	const [isDisable, setIsDisable] = useState(true);

	return (
		<>
			<form
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					router.push("/confirmation");
				}}>
				<SignupInput username="" placeHolder="کدملی / شماره موبایل / شماره قبض" />

				<CaptchaBox setIsDisable={setIsDisable} />

				{/* <CaptchaInput username="" placeHolder="کد امنیتی به عدد" /> */}

				<SubmitButton btnText="ورود" isDisable={isDisable} />
			</form>
		</>
	);
};

export default memo(SignupForm);

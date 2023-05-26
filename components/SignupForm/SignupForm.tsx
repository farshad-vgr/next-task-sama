import { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { SignupInput, CaptchaBox, CaptchaInput, SubmitButton } from "@/components";

const SignupForm = () => {
	const router = useRouter();
	const [isDisable, setIsDisable] = useState(true);

	async function checkCaptcha() {
		const result = await axios({
			method: "post",
			url: "https://api.arcaptcha.ir/arcaptcha/api/verify",
			headers: {},
			data: {
				challenge_id: "arcaptcha-token",
				site_key: "i6qqnsxay6",
				secret_key: "ehq31ra94lqjj2cvy76r",
			},
		});
		if (result.data.success) {
			console.log("it is ok");
			setIsDisable(false);
		} else {
			console.log("it is an error");
			setIsDisable(true);
		}
	}

	useEffect(() => {
		checkCaptcha()
	})

	return (
		<>
			<form
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					router.push("/confirmation");
				}}>
				<SignupInput username="" placeHolder="کدملی / شماره موبایل / شماره قبض" />

				<CaptchaBox />

				{/* <CaptchaInput username="" placeHolder="کد امنیتی به عدد" /> */}

				<SubmitButton btnText="ورود" isDisable={isDisable} />
			</form>
		</>
	);
};

export default memo(SignupForm);

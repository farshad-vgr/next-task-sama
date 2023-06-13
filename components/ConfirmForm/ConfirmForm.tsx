import { memo, useState } from "react";
import { useRouter } from "next/router";

import { SignupInput, ConfirmButton } from "../index";

const ConfirmForm = () => {
	const router = useRouter();
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			<form
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					router.push("/booking");
				}}>
				<SignupInput inputValue={inputValue} setInputValue={setInputValue} placeHolder="کد پیامک شده را وارد کنید" />

				<ConfirmButton btnText="تایید" isDisable={inputValue.length > 0 ? false : true} />
			</form>
		</>
	);
};

export default memo(ConfirmForm);

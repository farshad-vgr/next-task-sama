import { memo, useState } from "react";
import { useRouter } from "next/router";

import { ConfirmInput, ConfirmButton } from "../index";

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
				<ConfirmInput inputValue={inputValue} setInputValue={setInputValue} />

				<ConfirmButton btnText="تایید" isDisable={inputValue.length > 0 ? false : true} />
			</form>
		</>
	);
};

export default memo(ConfirmForm);

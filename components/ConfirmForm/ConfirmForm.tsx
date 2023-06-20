import { memo, useState } from "react";
import { useRouter } from "next/compat/router";

import { ConfirmInput, ConfirmButton } from "../index";

const ConfirmForm = () => {
	const router = useRouter();
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			<form
				data-testid="confirm-form"
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e) => {
					e.preventDefault();
					router?.push("/booking");
				}}>
				<ConfirmInput inputValue={inputValue} setInputValue={setInputValue} />

				<ConfirmButton btnText="تایید" isDisable={inputValue.length > 0 ? false : true} />
			</form>
		</>
	);
};

export default memo(ConfirmForm);

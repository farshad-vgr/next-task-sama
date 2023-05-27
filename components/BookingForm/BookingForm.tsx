import { memo, useState } from "react";

import { BookingInput, BookingButton } from "@/components";

const BookingForm = () => {
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			<form
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					inputValue.trim() === ""
						? alert("فرم را پر کنید!")
						: confirm("نوبت برای شما ثبت شد! میخواهید برگه نوبت دهی را دانلود کنید؟") === true
						? window.print()
						: null;
				}}>
				<BookingInput inputValue={inputValue} setInputValue={setInputValue} placeHolder="کد پیامک شده را وارد کنید" />

				<BookingButton btnText="ثبت نوبت" isDisable={false} />
			</form>
		</>
	);
};

export default memo(BookingForm);

import { memo, useState, useRef } from "react";
import dynamic from "next/dynamic";

import { BookingInput, BookingButton } from "@/components";

const GeneratePDF = dynamic(() => import("../GeneratePDF/GeneratePDF"), { ssr: false });

const BookingForm = () => {
	const [inputValue, setInputValue] = useState("");
	const ref = useRef<any>();

	return (
		<>
			<form
				ref={ref}
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					inputValue.length > 0 ? alert("نوبت برای شما ثبت گردید") : alert("لطفا اطلاعات فرم را تکمیل کنید!");
				}}>
				<BookingInput inputValue={inputValue} setInputValue={setInputValue} placeHolder="اطلاعات بیمار را وارد کنید" />

				<BookingButton btnText="ثبت نوبت" isDisable={false} />

				<GeneratePDF btnText="دانلود فرم" isDisable={false} formData={ref} />
			</form>
		</>
	);
};

export default memo(BookingForm);

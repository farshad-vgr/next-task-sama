import { memo, useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

import { BookingInput, BookingButton } from "@/components";

const GeneratePDF = dynamic(() => import("../GeneratePDF/GeneratePDF"), { ssr: false });

const initialStates = {
	firstName: "",
	lastName: "",
	gender: "",
	insurance: false,
	dateBooking: "",
	formCompleted: false,
	formDownloadable: false,
};

const BookingForm = () => {
	const [bookingFormValues, setBookingFormValues] = useState(initialStates);
	const ref = useRef<any>();

	useEffect(() => {
		if (bookingFormValues.firstName.length > 0) {
			setBookingFormValues({ ...bookingFormValues, formCompleted: true });
		} else {
			setBookingFormValues({ ...bookingFormValues, formCompleted: false });
		}
	}, [bookingFormValues]);

	return (
		<>
			<form
				ref={ref}
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					bookingFormValues.formCompleted ? alert("نوبت برای شما ثبت گردید") : alert("لطفا اطلاعات فرم را تکمیل کنید!");
					setBookingFormValues({ ...bookingFormValues, formDownloadable: true });
				}}>
				<BookingInput bookingFormValues={bookingFormValues} setBookingFormValues={setBookingFormValues} placeHolder="اطلاعات بیمار را وارد کنید" />

				<BookingButton btnText="ثبت نوبت" isDisable={!bookingFormValues.formCompleted} />

				<GeneratePDF btnText="دانلود فرم" isDisable={!bookingFormValues.formDownloadable} formData={ref} />
			</form>
		</>
	);
};

export default memo(BookingForm);

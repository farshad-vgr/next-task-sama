import { memo, useState, useRef } from "react";
import dynamic from "next/dynamic";

import { BookingFirstName, BookingLastName, BookingGender, BookingButton } from "@/components";

const GeneratePDF = dynamic(() => import("../GeneratePDF/GeneratePDF"), { ssr: false });

const initialStates = {
	firstName: "",
	lastName: "",
	gender: "male",
	insurance: false,
	dateBooking: "",
	formCompleted: false,
	formDownloadable: false,
};

const BookingForm = () => {
	const [bookingFormValues, setBookingFormValues] = useState(initialStates);
	const ref = useRef<any>();

	return (
		<>
			<form
				ref={ref}
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					console.table(bookingFormValues);
					bookingFormValues.formCompleted ? alert("نوبت برای شما ثبت گردید") : alert("لطفا اطلاعات فرم را تکمیل کنید!");
					setBookingFormValues({ ...bookingFormValues, formDownloadable: true });
				}}>
				<BookingFirstName bookingFormValues={bookingFormValues} setBookingFormValues={setBookingFormValues} placeHolder="نام" />

				<BookingLastName bookingFormValues={bookingFormValues} setBookingFormValues={setBookingFormValues} placeHolder="نام خانوادگی" />

				<BookingGender bookingFormValues={bookingFormValues} setBookingFormValues={setBookingFormValues} />

				<BookingButton btnText="ثبت نوبت" isDisable={bookingFormValues.firstName.length > 0 ? (bookingFormValues.lastName.length > 0 ? false : true) : true} />

				<GeneratePDF btnText="دانلود فرم" isDisable={!bookingFormValues.formDownloadable} formData={ref} />
			</form>
		</>
	);
};

export default memo(BookingForm);

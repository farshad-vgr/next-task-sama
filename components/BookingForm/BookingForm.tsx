import { memo, useState, useRef } from "react";
import dynamic from "next/dynamic";

import { BookingFirstName, BookingLastName, BookingGender, BookingInsurance, PersianDatePicker, BookingButton } from "@/components";

const GeneratePDF = dynamic(() => import("../GeneratePDF/GeneratePDF"), { ssr: false });

const initialStates = {
	firstName: "",
	lastName: "",
	gender: "male",
	insurance: false,
	date: "",
};

const BookingForm = () => {
	const [bookingFormValues, setBookingFormValues] = useState(initialStates);
	const [formDownloadable, setFormDownloadable] = useState(false);
	const ref = useRef<any>();

	return (
		<>
			<form
				ref={ref}
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					console.table(bookingFormValues);
					alert("نوبت برای شما ثبت گردید");
					setFormDownloadable(true);
				}}>
				<BookingFirstName bookingFormValues={bookingFormValues} setBookingFormValues={setBookingFormValues} placeHolder="نام" />

				<BookingLastName bookingFormValues={bookingFormValues} setBookingFormValues={setBookingFormValues} placeHolder="نام خانوادگی" />

				<BookingGender bookingFormValues={bookingFormValues} setBookingFormValues={setBookingFormValues} />

				<BookingInsurance bookingFormValues={bookingFormValues} setBookingFormValues={setBookingFormValues} />

				<PersianDatePicker bookingFormValues={bookingFormValues} setBookingFormValues={setBookingFormValues} placeHolder="انتخاب تاریخ" />

				<BookingButton
					btnText="ثبت نوبت"
					isDisable={bookingFormValues.firstName.length === 0 || bookingFormValues.lastName.length === 0 || bookingFormValues.date.length === 0}
				/>

				<GeneratePDF formData={ref} btnText="دانلود فرم" isDisable={!formDownloadable} />
			</form>
		</>
	);
};

export default memo(BookingForm);

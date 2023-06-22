import { memo, useState, useRef } from "react";
import dynamic from "next/dynamic";

import { BookingFirstName, BookingLastName, BookingGender, BookingInsurance, PersianDatePicker, BookingButton } from "../index";

const GeneratePdfButton = dynamic(() => import("../GeneratePdfButton/GeneratePdfButton"), { ssr: false });

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
	const ref = useRef<HTMLFormElement>(null);

	return (
		<>
			<form
				ref={ref}
				className="flex flex-col justify-center gap-4 w-full"
				onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();

					console.table(bookingFormValues);

					// Dynamically import toastify module (name import)
					const toast = await import("react-toastify").then((module) => module.toast);

					toast.success(
						`نوبت برای ${bookingFormValues.gender === "male" ? "آقای " : "خانم "} ${
							bookingFormValues.firstName + " " + bookingFormValues.lastName
						} ثبت شد!`,
						{
							position: toast.POSITION.TOP_CENTER,
						},
					);

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

				<GeneratePdfButton formData={ref} btnText="دانلود فرم" isDisable={!formDownloadable} />
			</form>
		</>
	);
};

export default memo(BookingForm);

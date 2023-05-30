import { memo } from "react";
import { DatePicker } from "react-advance-jalaali-datepicker";

interface Props {
	bookingFormValues: { firstName: string; lastName: string; gender: string; insurance: boolean; dateBooking: string; formDownloadable: boolean };
	setBookingFormValues: any;
	placeHolder: string;
}

const BookingDatePicker = ({ bookingFormValues, setBookingFormValues, placeHolder }: Props) => {
	function DatePickerInput(props: any) {
		return (
			<>
				<div className="relative flex justify-center w-full overflow-hidden">
					<div className="flex justify-center items-center absolute right-0 w-10 h-10 leading-8 outline-none text-white bg-red-700 border-b-[3px] border-b-red-700 rounded-[0_0.5rem_0_0]">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
							/>
						</svg>
					</div>

					<input
						className="py-2 px-4 pr-12 pb-0 w-full h-10 outline-none text-sm border-b-[3px] border-b-red-700 rounded-[0.5rem_0.5rem_0_0]"
						{...props}
					/>
				</div>
			</>
		);
	}

	function changeHandler(_unix: any, formatted: any) {
		setBookingFormValues({...bookingFormValues, dateBooking: formatted})
	}

	return (
		<>
			<DatePicker placeholder={placeHolder} onChange={changeHandler} inputComponent={DatePickerInput} format="jYYYY/jMM/jDD" monthTitleEnable />
		</>
	);
};

export default memo(BookingDatePicker);

import React, { memo } from "react";

interface Props {
	bookingFormValues: {
		firstName: string;
		lastName: string;
		gender: string;
		insurance: boolean;
		dateBooking: string;
		formDownloadable: boolean;
	};
	setBookingFormValues: any;
}

const BookingGender = ({ bookingFormValues, setBookingFormValues }: Props): JSX.Element => {
	return (
		<>
			<section>
				<div className="relative flex justify-start w-full overflow-hidden">
					<label className="me-2">جنسیت:</label>

					<input
						className="me-1 mb-1 accent-red-700"
						type="radio"
						id="male"
						name="gender"
						value="male"
						defaultChecked
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookingFormValues({ ...bookingFormValues, gender: e.target.value })}
					/>
					<label htmlFor="male" className="me-4">
						مرد
					</label>

					<input
						className="me-1 mb-1 accent-red-700"
						type="radio"
						id="female"
						name="gender"
						value="felame"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookingFormValues({ ...bookingFormValues, gender: e.target.value })}
					/>
					<label htmlFor="female">زن</label>
				</div>
			</section>
		</>
	);
};

export default memo(BookingGender);

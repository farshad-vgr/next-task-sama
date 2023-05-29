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

const BookingInsurance = ({ bookingFormValues, setBookingFormValues }: Props): JSX.Element => {
	return (
		<>
			<section>
				<div className="relative flex justify-start w-full overflow-hidden">
					<label className="me-2">بیمه درمانی:</label>

					<input
						className="me-1"
						type="radio"
						id="false"
						name="insurance"
						value="false"
						defaultChecked
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookingFormValues({ ...bookingFormValues, insurance: e.target.value })}
					/>
					<label htmlFor="false" className="me-4">
						ندارد
					</label>

					<input
						className="me-1"
						type="radio"
						id="true"
						name="insurance"
						value="true"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookingFormValues({ ...bookingFormValues, insurance: e.target.value })}
					/>
					<label htmlFor="true">دارد</label>
				</div>
			</section>
		</>
	);
};

export default memo(BookingInsurance);

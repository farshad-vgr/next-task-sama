import React, { memo } from "react";

interface Props {
	bookingFormValues: {
		firstName: string;
		lastName: string;
		gender: string;
		insurance: boolean;
		date: string;
	};
	setBookingFormValues: any;
}

const BookingGender = ({ bookingFormValues, setBookingFormValues }: Props): JSX.Element => {
	return (
		<>
			<section>
				<div data-testid="booking-gender-container" className="relative flex justify-start w-full overflow-hidden">
					<label data-testid="booking-gender-title" className="me-2">
						جنسیت:
					</label>

					<input
						data-testid="booking-gender-input-one"
						className="me-1 mb-1 accent-red-700"
						type="radio"
						id="male"
						name="gender"
						value="male"
						defaultChecked
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookingFormValues({ ...bookingFormValues, gender: e.target.value })}
					/>
					<label data-testid="booking-gender-label-one" htmlFor="male" className="me-4">
						مرد
					</label>

					<input
						data-testid="booking-gender-input-two"
						className="me-1 mb-1 accent-red-700"
						type="radio"
						id="female"
						name="gender"
						value="female"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookingFormValues({ ...bookingFormValues, gender: e.target.value })}
					/>
					<label data-testid="booking-gender-label-two" htmlFor="female">
						زن
					</label>
				</div>
			</section>
		</>
	);
};

export default memo(BookingGender);

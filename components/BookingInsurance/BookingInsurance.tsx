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

const BookingInsurance = ({ bookingFormValues, setBookingFormValues }: Props) => {
	return (
		<>
			<section>
				<div data-testid="booking-insurance-container" className="relative flex justify-start w-full overflow-hidden">
					<label data-testid="booking-insurance-title" className="me-2">
						بیمه درمانی:
					</label>

					<input
						data-testid="booking-insurance-input-one"
						className="me-1 mb-2 accent-red-700"
						type="radio"
						id="false"
						name="insurance"
						value="false"
						defaultChecked
						onChange={(e) => setBookingFormValues({ ...bookingFormValues, insurance: e.target.value })}
					/>
					<label data-testid="booking-insurance-label-one" htmlFor="false" className="me-4">
						ندارد
					</label>

					<input
						data-testid="booking-insurance-input-two"
						className="me-1 mb-2 accent-red-700"
						type="radio"
						id="true"
						name="insurance"
						value="true"
						onChange={(e) => setBookingFormValues({ ...bookingFormValues, insurance: e.target.value })}
					/>
					<label data-testid="booking-insurance-label-two" htmlFor="true">
						دارد
					</label>
				</div>
			</section>
		</>
	);
};

export default memo(BookingInsurance);

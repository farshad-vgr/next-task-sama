import Head from "next/head";

import { BookingForm, FormHeader } from "@/components";

export default function Booking() {
	return (
		<>
			<Head>
				<title>نوبت دهی</title>
			</Head>

			<div className="flex justify-center items-center h-[100vh] bg-mainBackground bg-cover bg-no-repeat z-10">
				<section className="flex flex-col justify-center items-center gap-8 my-2 p-2 w-[90%] xs:w-[28rem] rounded-lg outline-none backdrop-blur-[2px] shadow-[0_0_16px_2px_gray]">
					<FormHeader formTitle="فرم نوبت دهی" imageSrc="/assets/images/logo.png" imageWidth={150} imageHeight={50} />

					<BookingForm />
				</section>
			</div>
		</>
	);
}

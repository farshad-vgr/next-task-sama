import Head from "next/head";

import { FormHeader, UsernameInput, PasswordInput, SubmitButton } from "@/components";

export default function Home() {
	return (
		<>
			<Head>
				<title>ثبت نام</title>
			</Head>

			<div className="flex justify-center items-center h-[85vh] bg-mainBackground bg-cover bg-no-repeat">
				<section className="flex flex-col justify-center items-center gap-8 p-4 w-80 h-80 rounded-lg outline-none backdrop-blur-[2px] shadow-[0_0_16px_2px_gray]">
					<FormHeader formTitle="فرم ثبت نام" imageSrc="/assets/images/logo.png" imageWidth={150} imageHeight={50} />

					<form
						className="flex flex-col justify-center gap-4"
						onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
							console.log("onSub");
							e.preventDefault();
						}}>
						<UsernameInput username="" placeHolder="کدملی/شماره موبایل/شماره قبض" />

						<PasswordInput username="" placeHolder="کد امنیتی به عدد" />

						<SubmitButton btnText="ورود" />
					</form>
				</section>
			</div>
		</>
	);
}

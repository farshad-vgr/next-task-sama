import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";

import { Layout } from "../components";

import "react-toastify/dist/ReactToastify.min.css";
import "@/styles/globals.css";

// Local font files import
const iranSansFont = localFont({ src: "../public/assets/fonts/IRANSansMobile_Medium.ttf" });

//Dynamic JoyRideTour component import
const JoyRideTour = dynamic(() => import("../components/JoyRideTour/JoyRideTour"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="description" content="Authentication and Booking forms" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" href="/assets/images/icon.png" />
			</Head>

			<JoyRideTour />

			<ToastContainer rtl limit={3} />
			
			<main className={iranSansFont.className}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</>
	);
}

// This function allows you to analyze and measure the performance of pages using different metrics
export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.table(metric);
}

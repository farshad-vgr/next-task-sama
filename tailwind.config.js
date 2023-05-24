/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "500px",
			...defaultTheme.screens,
		},
		extend: {
			backgroundImage: {
				headerBackground: "url('/assets/images/newsletter.png')",
				footerBackground: "url('/assets/images/landscape.png')",
			},
		},
	},
	plugins: [],
};


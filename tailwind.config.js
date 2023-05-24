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
				mainBackground: "url('/assets/images/bgMain.jpg')",
			},
		},
	},
	plugins: [],
};


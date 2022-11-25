const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "576px",
				md: "768px",
				lg: "960px",
				xl: "1280px",
				"2xl": "1440px",
			},
		},
		container: {
			center: true,
			padding: "1.5rem",
		},
	},
	plugins: [],
});

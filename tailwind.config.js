/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = withMT({
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "576px",
			md: "768px",
			lg: "960px",
			xl: "1280px",
			"2xl": "1280px",
		},
		container: {
			center: true,
			padding: "1.5rem",
		},
		extend: {
			fontFamily: {
				sans: ["Kanit", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				slate: colors.slate,
				rose: colors.rose,
			},
			gridTemplateColumns: {
				'auto-fill': 'repeat(auto-fill, minmax(150px, 1fr))',
			  },
		},
	},
	plugins: [],
});

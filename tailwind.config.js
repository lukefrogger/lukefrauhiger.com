const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	darkMode: true, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#04192e",
					dark: "#032140",
				},
				highlight: "#FFAC2F",
			},
			fontFamily: {
				sans: ["Nunito", ...fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

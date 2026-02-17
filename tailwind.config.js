/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: "#00f2ff",
				secondary: "#7000ff",
				background: {
					light: "#f8fafc",
					dark: "#0a0a0c",
				},
				surface: {
					light: "rgba(255, 255, 255, 0.7)",
					dark: "rgba(15, 15, 20, 0.7)",
				}
			},
			fontFamily: {
				display: ["Plus Jakarta Sans", "sans-serif"],
				sans: ["Space Grotesk", "sans-serif"],
			},
			borderRadius: {
				'none': '0',
				'sm': '2px',
				DEFAULT: '4px',
				'md': '4px',
				'lg': '4px',
				'xl': '4px',
				'2xl': '4px',
				'3xl': '4px',
				'full': '9999px',
			},
		},
	},
	plugins: [],
}
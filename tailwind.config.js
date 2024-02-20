/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#fec52f', // This is the custom primary color
				altprimary: '#fcc339',
				secondary: '#435664',
				black: '#000',
				lightgrey: '#eae9f2',
				grey: '#404040',
				flatgrey: '#6c6e70',
				darkgrey: '#404042',
				charcoal: '#18181b',
				textmuted: '#12141d',
				smoke: '#49494b',
				steel: '#545456',
				beige: '#f5f4ef',
				taupe: '#c5c5c2',
				green: '#276259',
				blue: '#0f67b6',
				white: '#fff',
			},
		},
	},
	plugins: [],
};

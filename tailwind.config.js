module.exports = {
	mode: 'jit',
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./utils/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: '#04293A',
				secondary: '#142F43',
				puple: '#8326d4',
			},
			fontFamily: {
				ntr: ['NTR', 'sans-serif'],
				hammer: ['"Hammersmith One"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

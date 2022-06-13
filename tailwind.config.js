module.exports = {
	content: [
		'src/pages/**/*.{js,ts,jsx,tsx}',
		'src/components/**/*.{js,ts,jsx,tsx}',
		'src/styles/**/*.css',
	],
	theme: {
		extend: {
			// fontFamily: {
			//   'mono': ['ui-monospace', 'SFMono-Regular'],
			// }
			display: ['group-hover'],
			// colors: {
			//   "primary-bg-color": "var(----primary-bg-color)",
			//   "secondary-bg-color": "var(--secondary-bg-color)"
			// },
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
}

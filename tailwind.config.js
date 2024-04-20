/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{vue, js, html}"],
	media: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateColumns: {
				"header-columns": "1fr 6fr",
			},
			backgroundImage: {},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

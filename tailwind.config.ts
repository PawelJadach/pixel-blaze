import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				dark: "#000",
				light: "#fff",
				secondaryLight: "#e5e5e5",
				primary: "#fca311",
				secondary: "#14213d",
			},
		},
	},
	plugins: [],
};
export default config;

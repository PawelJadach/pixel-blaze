export type Project = {
	src: string;
	alt: string;
	href: string;
};

export type Testimonial = {
	text: string;
	author: string;
};

export const projects: Project[] = [
	{
		alt: "Kominki LUX",
		href: "https://kominki-lux.vercel.app/",
		src: "/projects/kominki-lux.png",
	},
	{
		alt: "HomeTrust",
		href: "https://home-trust.vercel.app/",
		src: "/projects/home-trust.png",
	},
	{
		alt: "MrDetailer",
		href: "https://mr-detailer.vercel.app/",
		src: "/projects/mr-detailer.png",
	},
	{
		alt: "StartupComputer",
		href: "https://startup-computer.vercel.app/",
		src: "/projects/startup-computer.png",
	},
	{
		alt: "More Water Pls",
		href: "https://www.more-water-pls.cc/",
		src: "/projects/more-water-pls.png",
	},
	{
		alt: "Osada Malina",
		href: "https://raspberry-page.vercel.app/",
		src: "/projects/osada-malina.png",
	},
	{
		alt: "TotalCars",
		href: "https://total-cars.vercel.app/",
		src: "/projects/total-cars.png",
	},
	{
		alt: "Use Tools",
		href: "https://www.use-tools.cc/",
		src: "/projects/use-tools.png",
	},
	{
		alt: "ahat.pl",
		href: "https://ahat-pl.vercel.app/",
		src: "/projects/ahat-pl.png",
	},
];
export const testimonials: Testimonial[] = [];

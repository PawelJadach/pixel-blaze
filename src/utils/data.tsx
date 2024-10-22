import HomeTrustDescription from "../components/Projects/descriptions/HomeTrust";

export type Project = {
	src: string;
	alt: string;
	href: string;
	slug?: string;
	title?: string;
	description?: React.ReactElement;
	industry?: string;
};

export type Testimonial = {
	text: string;
	author: string;
};

export const projects: Project[] = [
	{
		alt: "HomeTrust",
		href: "https://home-trust.vercel.app/",
		src: "/projects/home-trust.png",
		slug: "home-trust",
		title: "Projekt i wykonanie strony dla HomeTust",
		description: <HomeTrustDescription />,
	},
	{
		alt: "MrDetailer",
		href: "https://mr-detailer.vercel.app/",
		src: "/projects/mr-detailer.png",
		slug: "mr-detailer",
	},
	{
		alt: "StartupComputer",
		href: "https://startup-computer.vercel.app/",
		src: "/projects/startup-computer.png",
		slug: "startup-computer",
	},
	{
		alt: "More Water Pls",
		href: "https://www.more-water-pls.cc/",
		src: "/projects/more-water-pls.png",
		slug: "more-water-pls",
	},
	{
		alt: "Osada Malina",
		href: "https://raspberry-page.vercel.app/",
		src: "/projects/osada-malina.png",
		slug: "osada-malina",
	},
	{
		alt: "TotalCars",
		href: "https://total-cars.vercel.app/",
		src: "/projects/total-cars.png",
		slug: "total-cars",
	},
	{
		alt: "Use Tools",
		href: "https://www.use-tools.cc/",
		src: "/projects/use-tools.png",
		slug: "use-tools",
	},
	{
		alt: "ahat.pl",
		href: "https://ahat-pl.vercel.app/",
		src: "/projects/ahat-pl.png",
		slug: "ahat-pl",
	},
];
export const testimonials: Testimonial[] = [];

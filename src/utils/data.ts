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
];
export const testimonials: Testimonial[] = [];

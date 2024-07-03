import { NavLinkProps } from "@/components/Navbar/NavLink";
import { projects, testimonials } from "@/utils/data";

export const navLinks: NavLinkProps[] = [
	{
		href: "#hero",
		label: "Home",
	},
	{
		href: "#services",
		label: "Services",
	},
	...(projects.length > 0
		? [
				{
					href: "#projects",
					label: "Projects",
				},
		  ]
		: []),
	...(testimonials.length > 0
		? [
				{
					href: "#testimonials",
					label: "Testimonials",
				},
		  ]
		: []),
	{
		href: "/#process",
		label: "Process",
	},
	{
		href: "#contact",
		label: "Contact",
		filled: true,
	},
];

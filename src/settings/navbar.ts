import { NavLinkProps } from "@/components/Navbar/NavLink";
import { projects, testimonials } from "@/utils/data";

export const navLinks: NavLinkProps[] = [
	{
		href: "#hero",
		labelKey: "Home",
	},
	{
		href: "#services",
		labelKey: "Services",
	},
	...(projects.length > 0
		? [
				{
					href: "#projects",
					labelKey: "Projects",
				},
		  ]
		: []),
	...(testimonials.length > 0
		? [
				{
					href: "#testimonials",
					labelKey: "Testimonials",
				},
		  ]
		: []),
	{
		href: "/#process",
		labelKey: "Process",
	},
	{
		href: "#contact",
		labelKey: "Contact",
		filled: true,
	},
];

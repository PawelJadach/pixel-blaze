"use client";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import NavLogo from "./NavLogo";
import { navLinks } from "@/settings/navbar";
import NavLink from "./NavLink";

export const NavMobile = () => {
	const [isOpen, setOpen] = useState(false);
	const ref = useRef(null);

	useClickAway(ref, () => setOpen(false));

	return (
		<div
			ref={ref}
			className="lg:hidden p-6 fixed top-0 left-0 right-0 bg-base100"
		>
			<div className="flex justify-between">
				<div
					onClick={() => {
						if (isOpen) setOpen(false);
					}}
				>
					<NavLogo />
				</div>

				<Hamburger toggled={isOpen} size={24} toggle={setOpen} />
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed left-0 right-0 top-[90px] bottom-0 p-10 px-5 pt-0 bg-dark"
					>
						<ul className="grid gap-10">
							{navLinks.map((route, idx) => {
								return (
									<motion.li
										initial={{ scale: 0, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{
											type: "spring",
											stiffness: 260,
											damping: 20,
											delay: 0.1 + idx / 10,
										}}
										key={route.href}
										onClick={() => setOpen((prev) => !prev)}
									>
										<NavLink {...route} mobile />
									</motion.li>
								);
							})}
							<motion.li
								initial={{ scale: 0, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{
									type: "spring",
									stiffness: 260,
									damping: 20,
									delay: 0.1 + navLinks.length / 10,
								}}
							></motion.li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

"use client";
import React from "react";
import { motion } from "framer-motion";

const SlideIn = ({
	children,
	delay = 0,
	className,
}: {
	children: React.ReactNode;
	delay?: number;
	className?: string;
}) => {
	return (
		<motion.div
			className={className}
			initial={{
				opacity: 0,
				x: -50,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
				transition: {
					duration: 1,
					delay,
				},
			}}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
};

export default SlideIn;

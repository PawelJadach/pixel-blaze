"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const PageScroll = () => {
	const { scrollYProgress } = useScroll();

	return (
		<motion.div
			className="top-0 left-0 right-0 h-1 bg-primary fixed z-50 origin-left"
			style={{ scaleX: scrollYProgress }}
		/>
	);
};

export default PageScroll;

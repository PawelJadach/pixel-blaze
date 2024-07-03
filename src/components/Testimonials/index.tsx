import React from "react";
import Testimonial from "./Testimonial";
import { testimonials } from "@/utils/data";

const Testimonials = () => {
	if (testimonials.length === 0) return null;

	return (
		<div
			className="max-w-screen-xl mx-auto mt-20 md:mt-40"
			id="testimonials"
		>
			<div className="h-1 w-28 bg-primary rounded-xl mb-5" />
			<h1>What My Clients Say</h1>
			<div className="flex flex-wrap gap-8 items-center mt-14">
				{testimonials.map((testimonial) => (
					<Testimonial key={testimonial.author} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default Testimonials;

import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
	return (
		<div
			className="max-w-screen-xl mx-auto mt-20 md:mt-40"
			id="testimonials"
		>
			<div className="h-1 w-28 bg-primary rounded-xl mb-5" />
			<h1>What My Clients Say</h1>
			<div className="flex flex-wrap gap-8 items-center mt-14">
				<Testimonial
					text="John created an amazing website for my business.
						His attention to detail and creativity exceeded my
						expectations. Highly recommended!"
					author="Jogn Doe"
				/>
				<Testimonial
					text="John created an amazing website for my business.
						His attention to detail and creativity exceeded my
						expectations. Highly recommended!"
					author="Jogn Doe"
				/>
				<Testimonial
					text="John created an amazing website for my business.
						His attention to detail and creativity exceeded my
						expectations. Highly recommended!"
					author="Jogn Doe"
				/>
			</div>
		</div>
	);
};

export default Testimonials;

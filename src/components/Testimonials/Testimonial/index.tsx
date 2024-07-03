import { Testimonial as TestimonialType } from "@/utils/data";
import React from "react";

type TestimonialProp = TestimonialType;

const Testimonial = ({ text, author }: TestimonialProp) => {
	return (
		<div className="border border-light rounded-xl p-5 max-w-[350px]">
			<p className="text-sm mb-4 font-light">&quot;{text}&quot;</p>
			<p className="text-sm text-primary font-bold">{author}</p>
		</div>
	);
};

export default Testimonial;

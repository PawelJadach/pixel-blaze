import React from "react";
import Service from "./Service";
import {
	BrandingIcon,
	CopywritingIcon,
	DesignIcon,
	DevelopmentIcon,
} from "./Icons";

const Services = () => {
	return (
		<div className="max-w-screen-xl mx-auto flex justify-between items-center md:items-start flex-col md:flex-row gap-12 mt-20 md:mt-40">
			<Service
				header="Development"
				text="Crafting robust and scalable digital solutions tailored to
					your unique business needs."
				icon={<DevelopmentIcon />}
			/>
			<Service
				header="Design"
				text="Creating visually stunning and user-friendly designs that captivate and engage your audience."
				icon={<DesignIcon />}
			/>
			<Service
				header="Copywriting"
				text="Writing compelling and persuasive content that drives action and connects with your audience."
				icon={<CopywritingIcon />}
			/>
			<Service
				header="Branding"
				text="Building a distinctive and memorable brand identity that sets you apart from the competition."
				icon={<BrandingIcon />}
			/>
		</div>
	);
};

export default Services;

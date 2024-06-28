import React from "react";

const Process = () => {
	return (
		<div className="max-w-screen-xl mx-auto mt-20 md:mt-40">
			<div className="h-1 w-28 bg-primary rounded-xl mb-5" />
			<h1>What My Clients Say</h1>
			<div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left justify-between mt-14">
				<div className="max-w-[250px] space-y-2">
					<h3>
						<span className="text-primary">#</span>1 Planning
					</h3>
					<p>
						We align strategies with client goals and conduct
						extensive research
					</p>
				</div>
				<div className="h-1 w-32 bg-primary rounded-xl md:mb-5 rotate-90 md:rotate-0 my-20 md:my-0" />
				<div className="max-w-[250px] space-y-2">
					<h3>
						<span className="text-primary">#</span>2 Design
					</h3>
					<p>
						We seamlessly blend elegance with functionality and user
						experience
					</p>
				</div>
				<div className="h-1 w-32 bg-primary rounded-xl md:mb-5 rotate-90 md:rotate-0 my-20 md:my-0" />
				<div className="max-w-[250px] space-y-2">
					<h3>
						<span className="text-primary">#</span>3 Code
					</h3>
					<p>
						We transform ideas into tangible, high quality products
					</p>
				</div>
			</div>
		</div>
	);
};

export default Process;

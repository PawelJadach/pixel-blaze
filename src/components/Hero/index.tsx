import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<div
			className="max-w-screen-xl mx-auto flex justify-between items-center flex-col md:flex-row gap-12"
			id="hero"
		>
			<div className="flex flex-col gap-8 max-w-lg">
				<h1 className="text-balance">
					Custom Websites Crafted Just for{" "}
					<span className="relative -z-10">
						<span className="absolute -left-1 -right-2 top-1/2 bg-primary rounded-lg h-2 -z-20" />
						You
					</span>
				</h1>
				<p>
					From concept to launch, we bring your unique vision to life
					with tailored web solutions, exceptional design, and
					seamless functionality, ensuring your brand stands out in
					the digital landscape.
				</p>
				<Link href="#contact">
					<button>contact with us</button>
				</Link>
			</div>
			<div>
				<Image
					src="/hero.png"
					width={570}
					height={278}
					alt="Hero image - pc with woman"
				/>
			</div>
		</div>
	);
};

export default Hero;

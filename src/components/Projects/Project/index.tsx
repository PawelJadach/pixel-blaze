import { Project as ProjectType } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectProps = ProjectType;

const Project = ({ src, alt, href }: ProjectProps) => {
	return (
		<Link href={href} className="cursor-pointer relative group">
			<Image
				src={src}
				width={400}
				height={400}
				alt={alt}
				className="saturate-0 group-hover:saturate-100 transition-all"
			/>
			<button className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:opacity-0 group-hover:opacity-100 transition-all p-4 text-sm">
				Show more
			</button>
		</Link>
	);
};

export default Project;

import React from "react";
import Project from "./Project";
import { projects } from "@/utils/data";

const Projects = () => {
	if (projects.length === 0) return null;

	return (
		<div
			className="max-w-screen-xl mx-auto flex items-center justify-center flex-col md:flex-row gap-8 mt-20 md:mt-40 flex-wrap"
			id="projects"
		>
			{projects.map((project) => (
				<Project key={project.src} {...project} />
			))}
		</div>
	);
};

export default Projects;

import React from "react";
import Project from "./Project";

const Projects = () => {
	return (
		<div className="max-w-screen-xl mx-auto flex items-center justify-center flex-col md:flex-row gap-8 mt-20 md:mt-40 flex-wrap">
			<Project
				src="/project.png"
				alt="Project name"
				href="/project/name"
			/>
			<Project
				src="/project.png"
				alt="Project name"
				href="/project/name"
			/>
			<Project
				src="/project.png"
				alt="Project name"
				href="/project/name"
			/>
			<Project
				src="/project.png"
				alt="Project name"
				href="/project/name"
			/>
			<Project
				src="/project.png"
				alt="Project name"
				href="/project/name"
			/>
			<Project
				src="/project.png"
				alt="Project name"
				href="/project/name"
			/>
		</div>
	);
};

export default Projects;

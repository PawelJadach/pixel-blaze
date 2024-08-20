import React from "react";
import Project from "./Project";
import { projects } from "@/utils/data";
import SlideIn from "../animations/SlideIn";
import { useTranslations } from "next-intl";

const Projects = () => {
	const t = useTranslations("Projects");
	if (projects.length === 0) return null;

	return (
		<div className="max-w-screen-xl mx-auto mt-20 md:mt-40" id="projects">
			<SlideIn delay={0.2}>
				<div className="h-1 w-28 bg-primary rounded-xl mb-5" />
				<h1>{t("Header")}</h1>
			</SlideIn>
			<div className="flex items-center justify-center flex-col md:flex-row gap-8 flex-wrap mt-20	">
				{projects.map((project) => (
					<Project key={project.src} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;

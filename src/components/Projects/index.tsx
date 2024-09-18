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
			<div className="grid md:grid-cols-3 gap-8 flex-wrap mt-20	auto-rows-[400px]">
				{projects.map((project, index) => (
					<SlideIn key={project.src} delay={0.2 * index}>
						<Project {...project} />
					</SlideIn>
				))}
			</div>
		</div>
	);
};

export default Projects;

import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React from "react";

interface SennaProjectProps {
	project: Project;
}

export const SennaProject: React.FC<SennaProjectProps> = ({ project }) => {
	return (
		<div>
			<ProjectIntro project={project} />
			<img
				className="border border-gray-900 box-shadow my-2"
				src="/projects/senna/one.png"
			/>
			<img
				className="border border-gray-900 box-shadow"
				src="/projects/senna/two.png"
			/>
		</div>
	);
};

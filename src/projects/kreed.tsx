import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React from "react";

interface KreedProjectProps {
	project: Project;
}

export const KreedProject: React.FC<KreedProjectProps> = ({ project }) => {
	return (
		<div>
			<ProjectIntro project={project} />
			<img
				className="border border-gray-900 box-shadow my-2"
				src="/projects/kreed/one.avif"
			/>
		</div>
	);
};

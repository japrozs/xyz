import { Project } from "@/types";
import React from "react";

interface ProjectIntroProps {
	project: Project;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({ project }) => {
	return (
		<div>
			<p className="text-gray-200 mb-1 text-base"> {project.name} </p>
			<p className="text-gray-500 mb-2">
				{project.year} · {project.role}
			</p>
			<p className="leading-relaxed text-gray-300">
				{project.description}
			</p>
			{/* <a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				className="underline text-gray-400 mt-3 inline-block hover:text-gray-200"
			>
				view project →
			</a> */}
		</div>
	);
};

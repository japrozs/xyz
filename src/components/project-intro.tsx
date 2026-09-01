import { Project } from "@/types";
import React from "react";

interface ProjectIntroProps {
	project: Project;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({ project }) => {
	return (
		<div>
			<p className="mb-1 text-base font-medium"> {project.name} </p>
			<p className="mb-2 text-gray-500">
				{project.year} · {project.role}
			</p>
			<p className="leading-relaxed">{project.description}</p>
			{/* {project.link !== "" && (
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					className="underline text-gray-400 mt-3 inline-block hover:text-gray-200"
				>
					view project →
				</a>
			)} */}
		</div>
	);
};

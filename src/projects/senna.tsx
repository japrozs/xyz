import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React, { Dispatch, SetStateAction } from "react";

interface SennaProjectProps {
	project: Project;
	setSelected: Dispatch<SetStateAction<Project | null>>;
}

export const SennaProject: React.FC<SennaProjectProps> = ({
	project,
	setSelected,
}) => {
	return (
		<div>
			<ProjectIntro project={project} setSelected={setSelected} />
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

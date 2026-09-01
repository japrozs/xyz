import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React, { Dispatch, SetStateAction } from "react";

interface KreedProjectProps {
	project: Project;
	setSelected: Dispatch<SetStateAction<Project | null>>;
}

export const KreedProject: React.FC<KreedProjectProps> = ({
	project,
	setSelected,
}) => {
	return (
		<div>
			<ProjectIntro project={project} setSelected={setSelected} />
			<img
				className="border border-gray-900 box-shadow my-2"
				src="/projects/kreed/one.avif"
			/>
		</div>
	);
};

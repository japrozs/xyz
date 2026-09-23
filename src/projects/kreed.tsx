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
				className="border border-gray-300 box-shadow my-2"
				src="/projects/kreed/one.avif"
			/>
			<img
				className="border border-gray-300 box-shadow mb-2"
				src="/projects/kreed/three.avif"
			/>
			<img
				className="border border-gray-300 box-shadow mb-2"
				src="/projects/kreed/four.avif"
			/>
			<img
				className="border border-gray-300 box-shadow mb-2"
				src="/projects/kreed/two.avif"
			/>
		</div>
	);
};

import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React, { Dispatch, SetStateAction } from "react";

interface KreedProjectFreestyleProps {
	project: Project;
	setSelected: Dispatch<SetStateAction<Project | null>>;
}

export const KreedProjectFreestyle: React.FC<KreedProjectFreestyleProps> = ({
	project,
	setSelected,
}) => {
	return (
		<div>
			<ProjectIntro project={project} setSelected={setSelected} />
			<img
				className="border border-gray-900 box-shadow my-2"
				src="/projects/kreed-freestyle/two.avif"
			/>
			<img
				className="border border-gray-900 box-shadow mb-2"
				src="/projects/kreed-freestyle/four.avif"
			/>
			<img
				className="border border-gray-900 box-shadow mb-2"
				src="/projects/kreed-freestyle/five.avif"
			/>
			<img
				className="border border-gray-900 box-shadow my-2"
				src="/projects/kreed-freestyle/one.avif"
			/>
			<img
				className="border border-gray-900 box-shadow mb-2"
				src="/projects/kreed-freestyle/three.avif"
			/>
		</div>
	);
};

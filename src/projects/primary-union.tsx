import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React, { Dispatch, SetStateAction } from "react";

interface PrimaryUnionProjectProps {
	project: Project;
	setSelected: Dispatch<SetStateAction<Project | null>>;
}

export const PrimaryUnionProject: React.FC<PrimaryUnionProjectProps> = ({
	project,
	setSelected,
}) => {
	return (
		<div>
			<ProjectIntro project={project} setSelected={setSelected} />
			<img
				className="border border-gray-900 box-shadow my-2 w-full"
				src="/projects/primary-union/one.avif"
			/>
			<img
				className="border border-gray-900 box-shadow mb-2 w-full"
				src="/projects/primary-union/two.avif"
			/>
			<img
				className="border border-gray-900 box-shadow mb-2 w-full"
				src="/projects/primary-union/three.avif"
			/>
			<img
				className="border border-gray-900 box-shadow mb-2 w-full"
				src="/projects/primary-union/four.avif"
			/>
			<img
				className="border border-gray-900 box-shadow w-full"
				src="/projects/primary-union/five.avif"
			/>
		</div>
	);
};

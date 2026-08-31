import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React from "react";

interface PrimaryUnionProjectProps {
	project: Project;
}

export const PrimaryUnionProject: React.FC<PrimaryUnionProjectProps> = ({
	project,
}) => {
	return (
		<div>
			<ProjectIntro project={project} />
			<img
				className="border border-gray-900 box-shadow my-2 w-full"
				src="/projects/primary-union/one.png"
			/>
			<img
				className="border border-gray-900 box-shadow mb-2 w-full"
				src="/projects/primary-union/two.png"
			/>
			<img
				className="border border-gray-900 box-shadow mb-2 w-full"
				src="/projects/primary-union/three.png"
			/>
			<img
				className="border border-gray-900 box-shadow mb-2 w-full"
				src="/projects/primary-union/four.png"
			/>
			<img
				className="border border-gray-900 box-shadow w-full"
				src="/projects/primary-union/five.png"
			/>
		</div>
	);
};

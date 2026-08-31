import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React from "react";

interface FTRProjectProps {
	project: Project;
}

export const FTRProject: React.FC<FTRProjectProps> = ({ project }) => {
	return (
		<div>
			<ProjectIntro project={project} />
			<img
				className="border border-gray-900 box-shadow my-2 w-full"
				src="/projects/ftr/one.png"
			/>
			<div className="flex items-center gap-2">
				<img
					className="border border-gray-900 box-shadow w-1/2"
					src="/projects/ftr/two.png"
				/>
				<img
					className="border border-gray-900 box-shadow w-1/2"
					src="/projects/ftr/three.png"
				/>
			</div>
			<img
				className="border border-gray-900 box-shadow my-2 w-full"
				src="/projects/ftr/five.png"
			/>
			<img
				className="border border-gray-900 box-shadow my-2 w-full"
				src="/projects/ftr/four.png"
			/>
		</div>
	);
};

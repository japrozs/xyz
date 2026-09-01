import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React, { Dispatch, SetStateAction } from "react";

interface FTRProjectProps {
	project: Project;
	setSelected: Dispatch<SetStateAction<Project | null>>;
}

export const FTRProject: React.FC<FTRProjectProps> = ({
	project,
	setSelected,
}) => {
	return (
		<div>
			<ProjectIntro project={project} setSelected={setSelected} />
			<img
				className="border border-gray-900 box-shadow my-2 w-full"
				src="/projects/ftr/one.avif"
			/>
			<div className="flex items-center gap-2">
				<img
					className="border border-gray-900 box-shadow w-1/2"
					src="/projects/ftr/two.avif"
				/>
				<img
					className="border border-gray-900 box-shadow w-1/2"
					src="/projects/ftr/three.avif"
				/>
			</div>
			<img
				className="border border-gray-900 box-shadow my-2 w-full"
				src="/projects/ftr/five.avif"
			/>
			<img
				className="border border-gray-900 box-shadow my-2 w-full"
				src="/projects/ftr/four.avif"
			/>
		</div>
	);
};

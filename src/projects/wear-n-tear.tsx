import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React, { Dispatch, SetStateAction } from "react";

interface WearNTearProps {
	project: Project;
	setSelected: Dispatch<SetStateAction<Project | null>>;
}

export const WearNTear: React.FC<WearNTearProps> = ({
	project,
	setSelected,
}) => {
	return (
		<div>
			<ProjectIntro project={project} setSelected={setSelected} />
			<img
				className="border border-border-color box-shadow my-2"
				src="/projects/wear-n-tear/one.avif"
			/>
			<img
				className="border border-border-color box-shadow mb-2"
				src="/projects/wear-n-tear/two.avif"
			/>
			<img
				className="border border-border-color box-shadow mb-2"
				src="/projects/wear-n-tear/three.avif"
			/>
			<img
				className="border border-border-color box-shadow mb-2"
				src="/projects/wear-n-tear/four.avif"
			/>
		</div>
	);
};

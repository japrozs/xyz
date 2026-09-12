import { Project } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface ProjectIntroProps {
	project: Project;
	setSelected: Dispatch<SetStateAction<Project | null>>;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
	project,
	setSelected,
}) => {
	return (
		<div>
			<div className="flex items-center">
				<p className="mb-1 text-base font-medium"> {project.name} </p>
				<div className="flex items-center ml-auto mr-0 group cursor-pointer">
					<p className="text-gray-500 font-medium group-hover:text-red-500">
						Close
					</p>
					<IoCloseOutline
						onClick={() => setSelected(null)}
						className="text-gray-500 text-2xl group-hover:text-red-500"
					/>
				</div>
			</div>
			<p className="mb-2 text-gray-500 menlo">
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

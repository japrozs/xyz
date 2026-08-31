import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React from "react";

interface ManifestoProps {
	project: Project;
}

export const Manifesto: React.FC<ManifestoProps> = ({ project }) => {
	return (
		<div>
			<ProjectIntro project={project} />
			<ul className="mt-1.5 list-disc list-outside pl-3">
				<li className="pl-1">
					treat graphics as illustration; not decoration.
				</li>
				<li className="pl-1">specificity beats originality.</li>
				<li className="pl-1">contradiction is a design tool.</li>
				<li className="pl-1">
					leave evidence of the human hand and mind.
				</li>
				<li className="pl-1">references are the raw material.</li>
				<li className="pl-1">the logo is not the identity.</li>
				<li className="pl-1">
					love the game like it already loves u back.
				</li>
			</ul>
		</div>
	);
};

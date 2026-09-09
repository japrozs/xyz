import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface PrimaryUnionProjectProps {
	project: Project;
	setSelected: Dispatch<SetStateAction<Project | null>>;
}

export const PrimaryUnionProject: React.FC<PrimaryUnionProjectProps> = ({
	project,
	setSelected,
}) => {
	const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

	useEffect(() => {
		videoRefs.current.forEach((video) => {
			if (video) {
				video.muted = true;
				video.play().catch(() => {
					// autoplay was blocked; fails silently
				});
			}
		});
	}, []);
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
			<div className="flex items-center mb-2 gap-2">
				<video
					ref={(el) => {
						videoRefs.current[0] = el;
					}}
					className="border border-gray-900 shadow-sm w-1/3"
					src="/projects/primary-union/six_compressed.mp4"
					autoPlay
					loop
					muted
					playsInline
				/>
				<video
					ref={(el) => {
						videoRefs.current[1] = el;
					}}
					className="border border-gray-900 shadow-sm w-1/3"
					src="/projects/primary-union/seven_compressed.mp4"
					autoPlay
					loop
					muted
					playsInline
				/>
				<video
					ref={(el) => {
						videoRefs.current[2] = el;
					}}
					className="border border-gray-900 shadow-sm w-1/3"
					src="/projects/primary-union/eight_compressed.mp4"
					autoPlay
					loop
					muted
					playsInline
				/>
			</div>
			<img
				className="border border-gray-900 box-shadow w-full"
				src="/projects/primary-union/five.avif"
			/>
		</div>
	);
};

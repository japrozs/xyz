import { ProjectIntro } from "@/components/project-intro";
import { Project } from "@/types";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface FTRProjectProps {
	project: Project;
	setSelected: Dispatch<SetStateAction<Project | null>>;
}

export const FTRProject: React.FC<FTRProjectProps> = ({
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
				className="border border-gray-900 box-shadow my-2 w-full"
				src="/projects/ftr/four.avif"
			/>
		</div>
	);
};

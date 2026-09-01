"use client";

import { gifUrls, images, Project, projects } from "@/types";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Home() {
	const [selected, setSelected] = useState<Project | null>(null);
	const [colorIndex, setColorIndex] = useState<number | null>(null);

	useEffect(() => {
		// pick the random index only after mount to avoid SSR/client hydration mismatch
		setColorIndex(Math.floor(Math.random() * gifUrls.length));
	}, []);

	return (
		<div className="py-1 px-2 max-w-[1600px] mx-auto h-dvh flex flex-col bg-black text-gray-200">
			<div className="flex flex-row items-center pb-1">
				<p className="menlo text-white flex items-center">
					<img
						className="h-4 w-auto mr-2"
						src="/img-not-found.png"
						alt=""
					/>
					jp singh
				</p>
				<p className="ml-auto pt-0.5 text-[0.95rem]">
					designer in atlanta
				</p>
			</div>
			{/* <div className="flex items-center gap-x-1 justify-between">
				{gifUrls.map((url, i) => (
					<img
						key={url}
						className={`w-full max-w-[88px] h-auto flex-1 min-w-0 ${
							i === colorIndex ? "" : "grayscale"
						}`}
						src={url}
						alt=""
					/>
				))}
			</div> */}
			<div className="flex mt-2.5 gap-x-8 flex-1 min-h-0">
				{/* table - full width on mobile, half width on desktop */}
				<div className="w-full md:w-1/2 overflow-y-auto custom-scrollbar">
					<table className="w-full text-left text-sm text-[0.95rem]">
						<thead>
							<tr className="text-gray-500">
								<th className="pb-1 font-normal">project</th>
								<th className="pb-1 font-normal">role</th>
								<th className="pb-1 font-normal text-right md:text-left">
									year
								</th>
							</tr>
						</thead>
						<tbody>
							{projects.map((project) => (
								<tr
									key={project.id}
									onClick={() => setSelected(project)}
									className={`cursor-pointer hover:bg-[#070707] hover:underline ${
										selected?.id === project.id
											? "bg-[#070707] underline"
											: ""
									}`}
								>
									<td className="py-[0.1rem]">
										{project.name}
									</td>
									<td className="py-[0.1rem]">
										{project.role}
									</td>
									<td className="py-[0.1rem] text-right md:text-left">
										{project.year}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* right half - details, desktop only */}
				<div className="hidden overflow-x-hidden md:block md:w-1/2 text-sm text-[0.95rem] overflow-y-auto min-h-0">
					{selected ? (
						<selected.component
							project={selected}
							setSelected={setSelected}
						/>
					) : (
						<div className="grid grid-cols-5 gap-1 max-w-lg mx-auto">
							{images.map((img) => (
								<img
									key={img.url}
									// className="aspect-square object-cover cursor-pointer"
									className="aspect-square object-cover grayscale hover:grayscale-0 cursor-pointer"
									src={img.url}
									onClick={() => {
										const match = projects.find(
											(p) => p.id === img.projectId,
										);
										if (match) setSelected(match);
									}}
								/>
							))}
						</div>
					)}
				</div>
			</div>

			{/* mobile full-page modal */}
			{selected && (
				<div className="text-[0.95rem] fixed inset-0 z-50 bg-black p-2 md:hidden overflow-y-auto">
					<selected.component
						project={selected}
						setSelected={setSelected}
					/>
				</div>
			)}
			<div className="flex items-center justify-center gap-x-3 mt-auto pt-5 mb-2 text-[0.95rem] text-gray-500">
				<a
					href="mailto:sainijaproz@gmail.com"
					className="hover:text-gray-300"
				>
					sainijaproz@gmail.com
				</a>
				<span>·</span>
				<a
					href="https://instagram.com/japrozs"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-gray-300"
				>
					instagram
				</a>
			</div>
		</div>
	);
}

"use client";

import { gifUrls, Project, projects } from "@/types";
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
		<div className="py-1 px-2 h-dvh flex flex-col bg-black text-gray-200">
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
								<th className="pb-1 font-normal">year</th>
							</tr>
						</thead>
						<tbody>
							{projects.map((project) => (
								<tr
									key={project.id}
									onClick={() => setSelected(project)}
									className={`cursor-pointer hover:bg-[#070707] ${
										selected?.id === project.id
											? "bg-[#070707]"
											: ""
									}`}
								>
									<td className="py-1">{project.name}</td>
									<td className="py-1">{project.role}</td>
									<td className="py-1">{project.year}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* right half - details, desktop only */}
				<div className="hidden overflow-x-hidden md:block md:w-1/2 text-sm text-[0.95rem] overflow-y-auto min-h-0">
					{selected ? (
						<selected.component project={selected} />
					) : (
						<p className="text-gray-500 text-[0.95rem]">
							{/* select a project to see details */}
						</p>
					)}
				</div>
			</div>

			{/* mobile full-page modal */}
			{selected && (
				<div className="text-[0.95rem] fixed inset-0 z-50 bg-black p-2 md:hidden overflow-y-auto">
					<IoCloseOutline
						onClick={() => setSelected(null)}
						className="text-gray-500 text-2xl flex mb-1 ml-auto mr-0"
					/>
					<selected.component project={selected} />
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

"use client";
import AsciiModel from "@/components/ascii-model";
import { gifUrls, images, Project, projects } from "@/types";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
export default function Home() {
	const [selected, setSelected] = useState<Project | null>(null);
	const [colorIndex, setColorIndex] = useState<number | null>(null);
	const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(
		null,
	);
	const [emailCopied, setEmailCopied] = useState(false);

	const handleCopyEmail = async () => {
		const email = "sainijaproz@gmail.com";

		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(email);
			} else {
				const textarea = document.createElement("textarea");
				textarea.value = email;
				textarea.style.position = "fixed";
				textarea.style.opacity = "0";

				document.body.appendChild(textarea);
				textarea.focus();
				textarea.select();

				const success = document.execCommand("copy");
				document.body.removeChild(textarea);

				if (!success) throw new Error("Copy failed");
			}

			setEmailCopied(true);
			setTimeout(() => setEmailCopied(false), 5000);
		} catch (error) {
			console.error("Failed to copy email:", error);
		}
	};

	useEffect(() => {
		// pick the random index only after mount to avoid SSR/client hydration mismatch
		setColorIndex(Math.floor(Math.random() * gifUrls.length));
	}, []);

	const [atlantaTime, setAtlantaTime] = useState<string>("");
	useEffect(() => {
		// pick the random index only after mount to avoid SSR/client hydration mismatch
		setColorIndex(Math.floor(Math.random() * gifUrls.length));
	}, []);
	useEffect(() => {
		const formatTime = () =>
			new Intl.DateTimeFormat("en-US", {
				timeZone: "America/New_York",
				hour: "numeric",
				minute: "2-digit",
				hour12: true,
			})
				.format(new Date())
				.replace(" ", "");
		setAtlantaTime(formatTime());
		const interval = setInterval(() => {
			setAtlantaTime(formatTime());
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="max-w-[1600px] mx-auto h-dvh flex flex-col">
			<div className="py-1 px-2 flex flex-row items-center pb-1">
				<p className="text-gray-400 flex items-center gap-x-1.5">
					{/* <span className="menlo">$$$</span> */}
					{/* <img
						className="h-4 w-auto ml-1"
						src="/img-not-found.png"
						alt=""
					/>{" "} */}
					{/* <span className="bg-sky-600 text-white mr-1 pt-0.5"> */}
					<span className="bg-[#cfff04] text-black mr-1 pt-0.5">
						JP Singh
					</span>{" "}
					{/* <span className="menlo">$$$</span> */}
				</p>
				<p className="ml-auto pt-0.5 text-[0.95rem]">
					Atlanta — {atlantaTime}
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
			<div className="border-t border-border-color flex flex-col md:flex-row gap-x-8 flex-1 min-h-0 overflow-y-auto md:overflow-visible">
				{/* table - full width on mobile, half width on desktop */}
				<div className="w-full flex flex-col md:w-1/2 pt-1.5 md:border-r md:border-border-color md:overflow-y-auto custom-scrollbar">
					<p className="pl-2 text-gray-600">Selected Work :–</p>
					<table className="w-full text-left text-sm text-[0.95rem]">
						{/* <thead>
							<tr className="border-b border-border-color">
								<th className="pl-2 pb-1 font-normal">
									Project
								</th>
								<th className="pb-1 font-normal">Role</th>
								<th className="pr-2 pb-1 font-normal text-right hidden md:table-cell">
									Year
								</th>
							</tr>
						</thead> */}
						<tbody>
							{/* <tr className={`text-gray-400`}>
								<td className="pl-2 pt-0.5 py-[0.1rem]">
									??????
								</td>
								<td className="pt-0.5 py-[0.1rem]">???</td>
								<td className="pr-2 pt-0.5 py-[0.1rem] text-right hidden md:table-cell">
									In progress
								</td>
							</tr>
							<tr className={`text-gray-400`}>
								<td className="pl-2 pt-0.5 py-[0.1rem]">
									RUB3N
								</td>
								<td className="pt-0.5 py-[0.1rem]">Art</td>
								<td className="pr-2 pt-0.5 py-[0.1rem] text-right hidden md:table-cell">
									In progress
								</td>
							</tr> */}
							{projects.map((project) => (
								<tr
									key={project.id}
									onClick={() => setSelected(project)}
									onMouseEnter={() =>
										setHoveredProjectId(project.id)
									}
									onMouseLeave={() =>
										setHoveredProjectId(null)
									}
									className={`cursor-pointer hover:bg-gray-100/90 ${
										selected?.id === project.id
											? "bg-gray-100/90"
											: ""
									}`}
								>
									<td className="pl-2 pt-0.5 py-[0.1rem]">
										{project.name}
									</td>
									<td className="pt-0.5 py-[0.1rem]">
										{project.role}
									</td>
									<td className="pr-2 pt-0.5 py-[0.1rem] text-right hidden md:table-cell">
										{project.year}
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<p className="pl-2 text-gray-600 mt-10">About :–</p>
					<p className="pl-2">
						Japroz (JP) Singh is a{" "}
						<span className="line-through">
							multidisciplinary creative
						</span>{" "}
						human based in Atlanta who works between fashion, music,
						design, and culture. He works with brands, artists,
						musicians, and design teams internationally.
					</p>
					<div className="ml-2 mt-auto mb-2 hidden md:flex items-center gap-2 max-w-lg">
						{/* <img
							className="w-1/2 min-w-0 aspect-[3/4] object-cover"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYWidbD8cFoFT0L58W4qcyUJaCBk9EDoPVseo8o_Lbn1-koQpY56rtQ4&s=10"
							alt="panjab"
						/>
						<img
							className="w-1/2 min-w-0 aspect-[3/4] object-cover"
							src="https://images.unsplash.com/photo-1666113950458-4b26f1a25979?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
							alt="panjab"
						/> */}
						<img
							className="min-w-0 aspect-[5/3] object-cover box-shadow"
							src="https://images.pexels.com/photos/34442874/pexels-photo-34442874.jpeg"
							alt="panjab"
						/>
					</div>
				</div>
				{/* right half - details, desktop only */}
				<div className="hidden pt-2.5 overflow-x-hidden md:flex md:justify-center md:w-1/2 text-sm text-[0.95rem] overflow-y-auto min-h-0">
					<div className="w-full pr-6">
						{selected ? (
							<selected.component
								project={selected}
								setSelected={setSelected}
							/>
						) : (
							<div>
								<div className="grid grid-cols-5 gap-2 max-w-lg mx-auto">
									{images.map((img) => (
										<img
											key={img.url}
											className={`aspect-square object-cover cursor-pointer ${
												img.projectId ===
												hoveredProjectId
													? "grayscale-0"
													: "grayscale-0 hover:grayscale-0"
											}`}
											src={img.url}
											onClick={() => {
												const match = projects.find(
													(p) =>
														p.id === img.projectId,
												);
												if (match) setSelected(match);
											}}
										/>
									))}
								</div>
								<div className="hidden md:block w-full max-w-lg mx-auto mt-6 h-[350px] relative overflow-hidden">
									<AsciiModel
										src="/models/uzi.glb"
										rotationSpeed={0.015}
										scale={3}
										resolution={0.5}
										characters=" ._-+*"
										color="blue"
										backgroundColor="transparent"
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			{/* image grid, mobile only — sits just above the footer */}
			<div className="max-w-lg mx-auto grid grid-cols-5 gap-1 p-2 md:hidden">
				{images.map((img) => (
					<img
						key={img.url}
						className={`aspect-square object-cover cursor-pointer ${
							img.projectId === hoveredProjectId
								? "grayscale-0"
								: "grayscale-0 hover:grayscale-0"
						}`}
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
			{/* mobile full-page modal */}
			{selected && (
				<div className="text-[0.95rem] fixed inset-0 z-50 bg-black/97 p-2 md:hidden overflow-y-auto">
					<selected.component
						project={selected}
						setSelected={setSelected}
					/>
				</div>
			)}
			{/* <div className="hidden md:flex items-center pt-2 gap-x-1 justify-between">
				{gifUrls.map((url, i) => (
					<img
						key={url}
						className={`w-full max-w-[88px] h-auto flex-1 min-w-0 ${
							selected && "grayscale"
							// i === colorIndex ? "" : "grayscale"
						}`}
						src={url}
						alt=""
					/>
				))}
			</div> */}
			<div className="border-t border-border-color flex items-center justify-center gap-x-3 pt-2 mt-auto mb-2 text-[0.95rem]">
				<button
					type="button"
					onClick={handleCopyEmail}
					className="cursor-copy"
				>
					{emailCopied ? "Copied to clipboard" : "Email"}
				</button>
				<span>·</span>
				<a
					href="https://instagram.com/dysleks1k"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:underline"
				>
					Instagram
				</a>
			</div>
		</div>
	);
}

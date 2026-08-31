import { FTRProject } from "./projects/ftr";
import { KreedProject } from "./projects/kreed";
import { Manifesto } from "./projects/manifesto";
import { PrimaryUnionProject } from "./projects/primary-union";
import { SennaProject } from "./projects/senna";

export type Project = {
	id: string;
	name: string;
	year: string;
	role: string;
	description: string;
	link: string;
	component: React.FC<{ project: Project }>;
};

export const projects: Project[] = [
	{
		id: "kreed-topsy-turvy",
		name: "KREED",
		year: "2026",
		role: "Creative + Design",
		description: "album cover",
		link: "https://example.com",
		component: KreedProject,
	},
	{
		id: "primary-union",
		name: "Primary Union",
		year: "2026",
		role: "Brand Design",
		description:
			"a short description of what this project was about, what problem it solved, and your role in it.",
		link: "https://example.com",
		component: PrimaryUnionProject,
	},
	{
		id: "senna",
		name: "Senna",
		year: "2026",
		role: "Web Design",
		description:
			"another project description goes here explaining the context and outcome.",
		link: "https://example.com",
		component: SennaProject,
	},
	{
		id: "ftr",
		name: "FTR",
		year: "2025",
		role: "Graphic Design",
		description:
			"description of the third project, what it involved, and key takeaways.",
		link: "https://example.com",
		component: FTRProject,
	},
	{
		id: "manifesto",
		name: "Manifesto",
		year: "2025",
		role: "Philosophy",
		description: "design fundamentals.",
		link: "https://example.com",
		component: Manifesto,
	},
];

export const gifUrls = [
	"https://cyber.dabamos.de/88x31/100hot2.gif",
	"https://cyber.dabamos.de/88x31/angelkiss.gif",
	"https://cyber.dabamos.de/88x31/anigif.gif",
	"https://cyber.dabamos.de/88x31/compaq.gif",
	"https://cyber.dabamos.de/88x31/ebay3.gif",
	"https://cyber.dabamos.de/88x31/ifree_chat.gif",
	"https://cyber.dabamos.de/88x31/kate.gif",
	"https://cyber.dabamos.de/88x31/mailbits-loop-88x31.gif",
	"https://cyber.dabamos.de/88x31/nocookie.gif",
	"https://cyber.dabamos.de/88x31/themez.gif",
	"https://cyber.dabamos.de/88x31/radio-pixel-88x31.gif",
	"https://cyber.dabamos.de/88x31/propaganda.gif",
	"https://cyber.dabamos.de/88x31/shkolar-88x31-2.gif",
	"https://cyber.dabamos.de/88x31/submit25free01.gif",
];

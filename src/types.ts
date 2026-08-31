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
		description:
			'Visual identity and cover artwork for Atlanta artist Kreed\'s forthcoming single "Topsy Turvey" scheduled for release in late 2026.',
		link: "https://example.com",
		component: KreedProject,
	},
	{
		id: "primary-union",
		name: "Primary Union",
		year: "2026",
		role: "Brand Design",
		description:
			"End-to-end creative direction and visual identity development for Primary Union, a streetwear brand built from the ground up. The project encompasses logo and identity design, color systems, art direction, fashion design, brand aesthetics, and a fully responsive digital experience across desktop and mobile.",
		link: "https://example.com",
		component: PrimaryUnionProject,
	},
	{
		id: "senna",
		name: "Senna",
		year: "2026",
		role: "Web Design",
		description:
			"Product design and web development for Senna, a unified document search platform that brings files from multiple cloud providers into one streamlined, centralized search experience.",
		link: "https://example.com",
		component: SennaProject,
	},
	{
		id: "ftr",
		name: "FTR",
		year: "2025",
		role: "Graphic Design",
		description:
			'Graphic direction for FTR ["Fuck the Rules"], the visual campaign extension of streetwear label Primary Union, featuring a series of dystopian graphics and posters developed across the brand’s digital ecosystem.',
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

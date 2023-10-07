import {
	mobile,
	backend,
	web,
	javascript,
	typescript,
	html,
	css,
	sass,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	talent,
	bleasedTree,
	carrent,
	jobit,
	tripguide,
	express,
	angular,
	bootstrap,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "Sass",
		icon: sass,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Angular",
		icon: angular,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Bootstrap",
		icon: bootstrap,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Express",
		icon: express,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Git",
		icon: git,
	},
];

const experiences = [
	{
		title: "Front-end Developer",
		company_name: "Bleased Tree",
		icon: bleasedTree,
		iconBg: "#E6DEDD",
		date: "Feb 2023 - April 2023",
		points: [
			"worked with a team of front-end developers backend developers and designers team working to volunteering purpose",
			"my role in this team is to design and develope about page to make an overview of organization and there work",
		],
	},
	{
		title: "Full-Stack Developer",
		company_name: "Talent Oriented",
		icon: talent,
		iconBg: "#E6DEDD",
		date: "Aug 2023 - present",
		points: [
			"Developing and maintaining web application using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to devlope Talent Oriented platform",
			"working as a fullstack devloper and manage a database and develope RESTfull API, and frontend devloper woking in client side using React",
		],
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, projects };

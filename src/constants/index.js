import {
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
	chart,
	memories,
	expenses,
	aziz,
	pomodoro,
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
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: web,
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
		name: "Memories",
		description:
			"Web-based social media platform that allows users to Create memorie posts and interact with it, and see other's memorie",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "redux",
				color: "text-fuchsia-500",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "express",
				color: "express-color",
			},
		],
		image: memories,
		source_code_link: "https://github.com/Zeyad-Hegazy/memories",
		live_preview_link: "https://memories-client-5vxr.onrender.com/",
	},

	{
		name: "Admin Dashboard",
		description:
			"fully functional, customizable dashboard for any kind of businesses and nicely displays information about businesses through beautiful charts",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwendcss",
				color: "text-blue-300",
			},
			{
				name: "syncfusion",
				color: "orange-text-gradient",
			},
		],
		image: chart,
		source_code_link: "https://github.com/Zeyad-Hegazy/admin_dashboard",
		live_preview_link: "https://admin-dashboard-woad-six.vercel.app/ecommerce",
	},

	{
		name: "Expenses Tracker",
		description:
			"Web-based application that allows users to note ther purches and track it during a set amount of time",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "text-blue-300",
			},
		],
		image: expenses,
		source_code_link: "https://github.com/Zeyad-Hegazy/Expenses-tracker",
		live_preview_link: "https://expenses-tracker-flame.vercel.app/",
	},
	{
		name: "Aziz Studio",
		description:
			"Landing page for a Saudi creative design agency that allows users to see information about the studio",
		tags: [
			{ name: "html", color: "orange-text-gradient" },
			{
				name: "css",
				color: "blue-text-gradient",
			},
			{
				name: "javascript",
				color: "text-amber-400",
			},
		],
		image: aziz,
		source_code_link: "https://github.com/Zeyad-Hegazy/Aziz-studio",
		live_preview_link: "https://aziz-studio.vercel.app/",
	},

	{
		name: "Pomodoro",
		description:
			"Pomodoro timer for activities for 25 minutes and 5 minutes to take a break and customizable in the main theme color, also set timers on your own",
		tags: [
			{ name: "html", color: "orange-text-gradient" },
			{
				name: "css",
				color: "blue-text-gradient",
			},
			{
				name: "javascript",
				color: "text-amber-400",
			},
		],
		image: pomodoro,
		source_code_link: "https://github.com/Zeyad-Hegazy/Pomodoro",
		live_preview_link: "https://pomodoro-nu-lemon.vercel.app/",
	},
];

export { services, technologies, experiences, projects };

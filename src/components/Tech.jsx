/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tooltib = ({ tech }) => {
	return (
		<p className="absolute text-xs text-white bg-gray-700 rounded-md shadow-lg p-2 bottom-28">
			{tech}
		</p>
	);
};

const Tech = () => {
	const [showTooltib, setShowTooltib] = useState(false);
	const [hoveredTech, setHoveredTech] = useState(null);

	const hoverOnTech = (tech) => {
		setShowTooltib(true);
		setHoveredTech(tech);
	};

	const leaveTech = () => {
		setShowTooltib(false);
		setHoveredTech(null);
	};

	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((tech, index) => (
				<div
					key={`tech-icon-${index}`}
					className="relative w-28 h-28"
					onMouseEnter={() => hoverOnTech(tech.name)}
					onMouseLeave={leaveTech}
				>
					{hoveredTech === tech.name && showTooltib && (
						<Tooltib tech={tech.name} />
					)}
					<BallCanvas icon={tech.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");

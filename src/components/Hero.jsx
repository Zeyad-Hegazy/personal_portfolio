import { motion } from "framer-motion";
import cv_file from "../assets/cv/Zeyad-Hegazy.pdf";
import { styles } from "../styles";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="flex flex-col items-center">
				<div
					className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
				>
					<div className="flex flex-col justify-center items-center t-5">
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.2 }}
							className="w-5 h-5 rounded-full bg-[#915eff]"
						/>
						<motion.div
							initial={{ height: 0 }}
							animate={{ height: "20rem" }}
							transition={{ duration: 2 }}
							className="w-1 sm:h-80 violet-gradient"
						/>
					</div>

					<div>
						<h1 className={`${styles.heroHeadText}`}>
							Hi, I&apos;m <span className="text-[#915eff]">Zeyad</span>
						</h1>
						<p className={`${styles.heroSubText}`}>
							I&apos;m Full-Stack Developer with a passion for creating
							beautiful, responsive, and user-centric applications.
							<br className="hidden sm:block" />I strive to build future proof
							applications by writing clean, scalable, and reusable code.
						</p>
					</div>
				</div>
				<motion.div
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className={`${styles.paddingX} w-full flex justify-center items-center`}
				>
					<a
						href={cv_file}
						download="Zeyad-Hegazy.pdf"
						type="application/octet-stream"
						className="absolute top-[500px]"
					>
						<button
							type="button"
							className="w-auto h-auto p-5 rounded-md bg-[#915eff] text-white font-bold sm:text-[40px] text-[20px]"
						>
							Download CV
						</button>
					</a>
				</motion.div>

				<div className="absolute lg:bottom-10 bottom-0 w-full flex justify-center items-center">
					<a href="#about">
						<div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
							<motion.div
								animate={{ y: [0, 24, 0] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: "loop",
								}}
								className="w-3 h-3 rounded-full bg-secondary mb-1"
							></motion.div>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;

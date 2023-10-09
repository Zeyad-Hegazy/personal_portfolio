/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// import { createPortal } from "react-dom";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Toast = ({ state, message }) => {
	return (
		<motion.p
			initial={{ x: 100 }}
			animate={{ x: 0 }}
			className={`absolute bottom-20 right-10 w-[30rem] h-auto py-4 bg-${state}-700 flex justify-start items-center pl-10 border-l-8 border-l-${state}-400 text-2xl text-white z-10`}
		>
			{message}
		</motion.p>
	);
};

const Contact = () => {
	const formRef = useRef();
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [messageDisplay, setMessageDisplay] = useState(false);
	const [messageState, setMessageState] = useState("green");
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.name || !form.email || !form.message)
			return console.log("emptyyyy");

		setLoading(true);

		emailjs
			.send(
				"service_2lml3xh",
				"template_q9i1vcd",
				{
					from_name: form.name,
					to_name: "Zeyad Hegazy",
					from_email: form.email,
					to_email: "zhegazy409@gmail.com",
					message: form.message,
				},
				"CLP6IZn-k5W91t327"
			)
			.then(() => {
				setLoading(false);
				setMessageState("green");
				setMessage("Thank you. I will get back to you as soon as possible");
				setMessageDisplay(true);
				setForm({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch(() => {
				setLoading(false);
				setMessageState("red");
				setMessage("Somthing Went Wrong, try again later");
				setMessageDisplay(true);
			})
			.finally(() => {
				setTimeout(() => setMessageDisplay(false), 5000);
			});
	};

	return (
		<>
			{messageDisplay && <Toast state={messageState} message={message} />}
			<div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
				<motion.div
					variants={slideIn("left", "tween", 0.2, 1)}
					className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
				>
					<p className={styles.sectionSubText}>get in touch</p>
					<h3 className={styles.sectionHeadText}>Contact.</h3>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col gap-8"
					>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Your Name</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								placeholder="What's your name"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Your E-mail</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="What's your Email"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Message</span>
							<textarea
								rows="7"
								name="message"
								value={form.message}
								onChange={handleChange}
								placeholder="What do you want to say?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
							/>
						</label>

						<button
							type="submit"
							className="bg-tertiary py-3 px-8 outline-none border-none w-fit font-bold  text-white shadow-md shadow-primary rounded-xl"
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</motion.div>

				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex justify-center items-center"
				>
					<EarthCanvas />
				</motion.div>
			</div>
		</>
	);
};

export default SectionWrapper(Contact, "contact");

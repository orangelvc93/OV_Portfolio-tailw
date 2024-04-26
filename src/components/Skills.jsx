// Import react-circular-progressbar module and styles
import { useState } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./extends/ProgressProvider";

const Skills = () => {
	const [valueHTML, setValueEndHTML] = useState(95);
	const [valueCSS, setValueEndCSS] = useState(96);
	const [valueJS, setValueEndJS] = useState(80);
	const [valueTS, setValueEndTS] = useState(60);
	return (
		<div
			id="skills"
			className="flex justify-center items-center flex-col min-h-auto pb-20 max-w-5xl m-auto"
		>
			<h2 className="text-3xl uppercase font-bold text-white mb-10 pt-16">
				Ski<span className="text-primary-light">lls</span>
			</h2>
			<span className="w-full bg-gradient-to-r from-transparent via-primary to-transparent h-1 mb-6"></span>

			<div className="grid gap-6 grid-cols-2 sm:grid-cols-4 max-w-5xl ">
				{/* ======== HTML =============================== */}
				<div className="sm:w-[150px] w-32 transition-transform hover:scale-110">
					<ProgressProvider
						valueStart={0}
						valueEnd={valueHTML}
					>
						{(value) => (
							<CircularProgressbar
								value={value}
								text={`${value}%`}
								styles={buildStyles({
									textColor: "#e34f26",
									pathColor: "#e34f26",
									trailColor: "#030712",
									textSize: "20px",
								})}
							/>
						)}
					</ProgressProvider>
					<h3
						style={{ color: "#e34f26" }}
						className="text-center font-bold sm:text-3xl text-xl"
					>
						HTML
					</h3>
				</div>

				{/* ======== CSS =============================== */}
				<div className="sm:w-[150px] w-32 hover:scale-110">
					<ProgressProvider
						valueStart={0}
						valueEnd={valueCSS}
					>
						{(value) => (
							<CircularProgressbar
								value={value}
								text={`${value}%`}
								styles={buildStyles({
									textColor: "#2f7efb",
									pathColor: "#2f7efb",
									trailColor: "#030712",
									textSize: "20px",
								})}
							/>
						)}
					</ProgressProvider>
					<h3
						style={{ color: "#2f7efb" }}
						className="text-center font-bold sm:text-3xl text-xl"
					>
						CSS
					</h3>
				</div>

				{/* ======== JS =============================== */}
				<div className="sm:w-[150px] w-32 hover:scale-110">
					<ProgressProvider
						valueStart={0}
						valueEnd={valueJS}
					>
						{(value) => (
							<CircularProgressbar
								value={value}
								text={`${value}%`}
								styles={buildStyles({
									textColor: "#f7df1e",
									pathColor: "#f7df1e",
									trailColor: "#030712",
									textSize: "20px",
								})}
							/>
						)}
					</ProgressProvider>
					<h3
						style={{ color: "#f7df1e" }}
						className="text-center font-bold sm:text-3xl text-xl"
					>
						JavaScript
					</h3>
				</div>

				{/* ======== TypeScript =============================== */}
				<div className="sm:w-[150px] w-32 hover:scale-110">
					<ProgressProvider
						valueStart={0}
						valueEnd={valueTS}
					>
						{(value) => (
							<CircularProgressbar
								value={value}
								text={`${value}%`}
								styles={buildStyles({
									textColor: "#3178c6",
									pathColor: "#3178c6",
									trailColor: "#030712",
									textSize: "20px",
								})}
							/>
						)}
					</ProgressProvider>
					<h3
						style={{ color: "#3178c6" }}
						className="text-center font-bold sm:text-3xl text-xl"
					>
						TypeScript
					</h3>
				</div>
			</div>

			<span className="w-full bg-gradient-to-r from-transparent via-primary to-transparent h-1 mt-6 "></span>

			<div className="w-full flex sm:flex-row flex-col  sm:gap-5 pt-2 relative ">
				{/* ===============code skills===================== */}
				<div className="py-10 w-full">
					<h2 className="text-white text-3xl font-bold">
						Code <span className="text-primary">Skills</span>
					</h2>
					<div className="mt-2 rounded-md relative z-10 bg-gray-950 p-3">
						{/* ======== React ============= */}
						<div className="p-3 border-2 border-primary rounded-lg mt-2">
							<div className="flex justify-between ">
								<h3 className="text-black text-[20px] font-bold bg-[#00d8ff] px-4 rounded-lg -mx-5">
									React
								</h3>
								<span className="text-primary-light text-[20px] font-bold">
									85%
								</span>
							</div>
							<div className="border-2 border-primary h-5  rounded-md p-1 mt-2">
								<span className="bg-[#00d8ff] w-40 h-full block w-[85%]"></span>
							</div>
						</div>

						{/* ======== Tailwind ============= */}
						<div className="p-3 border-2 border-primary rounded-lg mt-2">
							<div className="flex justify-between ">
								<h3 className="text-black text-[20px] font-bold bg-[#36B6F2] px-4 rounded-lg -mx-5">
									Tailwind
								</h3>
								<span className="text-primary-light text-[20px] font-bold">
									70%
								</span>
							</div>
							<div className="border-2 border-primary h-5  rounded-md p-1 mt-2">
								<span className="bg-[#36B6F2] w-40 h-full block w-[70%]"></span>
							</div>
						</div>

						{/* ======== MongoDB ============= */}
						<div className="p-3 border-2 border-primary rounded-lg mt-2">
							<div className="flex justify-between ">
								<h3 className="text-black text-[20px] font-bold bg-[#7cd54b] px-4 rounded-lg -mx-5">
									MongoDB
								</h3>
								<span className="text-primary-light text-[20px] font-bold">
									50%
								</span>
							</div>
							<div className="border-2 border-primary h-5  rounded-md p-1 mt-2">
								<span className="bg-[#7cd54b] w-40 h-full block w-[50%]"></span>
							</div>
						</div>

						{/* ======== Node.js ============= */}
						<div className="p-3 border-2 border-primary rounded-lg mt-2">
							<div className="flex justify-between ">
								<h3 className="text-black text-[20px] font-bold bg-[#6cc24a] px-4 rounded-lg -mx-5">
									Node.js
								</h3>
								<span className="text-primary-light text-[20px] font-bold">
									60%
								</span>
							</div>
							<div className="border-2 border-primary h-5  rounded-md p-1 mt-2">
								<span className="bg-[#6cc24a] w-40 h-full block w-[60%]"></span>
							</div>
						</div>

						{/* ======== Express ============= */}
						<div className="p-3 border-2 border-primary rounded-lg mt-2">
							<div className="flex justify-between ">
								<h3 className="text-black text-[20px] font-bold bg-[#F1C617] px-4 rounded-lg -mx-5">
									Express
								</h3>
								<span className="text-primary-light text-[20px] font-bold">
									60%
								</span>
							</div>
							<div className="border-2 border-primary h-5  rounded-md p-1 mt-2">
								<span className="bg-[#F1C617] w-40 h-full block w-[60%]"></span>
							</div>
						</div>

						{/* ======== Next.js ============= */}
						<div className="p-3 border-2 border-primary rounded-lg mt-2">
							<div className="flex justify-between ">
								<h3 className="text-black text-[20px] font-bold bg-[#6E68FF] px-4 rounded-lg -mx-5">
									Next.js
								</h3>
								<span className="text-primary-light text-[20px] font-bold">
									50%
								</span>
							</div>
							<div className="border-2 border-primary h-5  rounded-md p-1 mt-2">
								<span className="bg-[#6E68FF] w-40 h-full block w-[60%]"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute top-0 left-72 w-full h-full">
					{/* Aplica el efecto de difuminado solo al fondo del elemento */}
					<div className="bg-primary w-60 h-60 rounded-full blur-[100px] "></div>
				</div>

				{/* =============== Professional Skills ============ */}
				<div className="py-10 w-full">
					<h2 className="text-white text-3xl font-bold">
						Profesional <span className="text-primary">Skills</span>
					</h2>
					<div className="mt-2 rounded-md relative z-10 bg-gray-950 p-3">
						{/* ======== Figma ============= */}
						<div className="p-3 border-2 border-primary rounded-lg mt-2">
							<div className="flex justify-between ">
								<h3 className="text-black text-[20px] font-bold bg-[#EB4C1D] px-4 rounded-lg -mx-5">
									Figma
								</h3>
								<span className="text-primary-light text-[20px] font-bold">
									70%
								</span>
							</div>
							<div className="border-2 border-primary h-5  rounded-md p-1 mt-2">
								<span className="bg-[#EB4C1D] w-40 h-full block w-[70%]"></span>
							</div>
						</div>

						{/* ======== Illustrator ============= */}
						<div className="p-3 border-2 border-primary rounded-lg mt-2">
							<div className="flex justify-between ">
								<h3 className="text-black text-[20px] font-bold bg-[#F79500] px-4 rounded-lg -mx-5">
									Illustrator
								</h3>
								<span className="text-primary-light text-[20px] font-bold">
									60%
								</span>
							</div>
							<div className="border-2 border-primary h-5  rounded-md p-1 mt-2">
								<span className="bg-[#F79500] w-40 h-full block w-[60%]"></span>
							</div>
						</div>

						{/* ======== Photo Shop ============= */}
						<div className="p-3 border-2 border-primary rounded-lg mt-2">
							<div className="flex justify-between ">
								<h3 className="text-black text-[20px] font-bold bg-[#4CC2E6] px-4 rounded-lg -mx-5">
									PhotoShop
								</h3>
								<span className="text-primary-light text-[20px] font-bold">
									60%
								</span>
							</div>
							<div className="border-2 border-primary h-5  rounded-md p-1 mt-2">
								<span className="bg-[#4CC2E6] w-40 h-full block w-[60%]"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute top-[900px] w-full h-full">
					{/* Aplica el efecto de difuminado solo al fondo del elemento */}
					<div className="bg-primary w-60 h-60 rounded-full blur-[100px] "></div>
				</div>
			</div>
		</div>
	);
};

export default Skills;

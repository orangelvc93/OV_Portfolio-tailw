import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { educationDB } from "../data/db";

const Experience = () => {
	return (
		<div className="flex justify-center items-center flex-col min-h-auto pb-20">
			<h2 className="text-3xl uppercase font-bold text-white mb-10">
				Mi <span className="text-primary-light">Experiencia</span>
			</h2>

			<div className="flex gap-20 flex-col md:flex-row max-w-5xl">
				{/* Contenedor - Educación */}
				<div className="w-full md:w-1/2">
					<h3 className="text-primary-light uppercase font-bold text-xl mb-5">
						Educación
					</h3>
					{/* Wrap Educación */}
					<div className="border-l-[.2rem] border-primary-light backdrop-blur-md ">
						{educationDB.map((item) => (
							<div
								key={item.id}
								className="relative pl-4 md:pl-7 mb-5 "
							>
								<div className="border-[.2rem] p-4 text-white rounded-md border-primary-light shadow-4xl shadow-primary">
									<div className=" flex items-center gap-2 text-lg text-primary-light">
										<FaCalendarAlt /> {item.date}
									</div>
									<h3 className="mt-2 font-bold text-xl">{item.title}</h3>
									<p className="mb-2 -mt-1 text-primary-light">{item.place}</p>
									<p>{item.content}</p>
								</div>
								<div className="w-4 h-4 bg-primary-light block absolute rounded-full -top-1 -left-[10px]"></div>
							</div>
						))}
					</div>
				</div>

				{/* Contenedor - Experiencia */}
				<div className="w-full md:w-1/2">
					<h3 className="text-primary-light uppercase font-bold text-xl mb-5">
						Experiencia
					</h3>
					{/* Wrap Educación */}
					<div className="border-l-[.2rem] border-primary-light ">
						<div className="relative pl-4 md:pl-7">
							<div className="border-[.2rem] p-4 text-white rounded-md border-primary-light shadow-4xl shadow-primary">
								<div className=" flex items-center gap-2 text-lg text-primary-light">
									<FaCalendarAlt /> 2017 - 2018
								</div>
								<h3 className="my-2 font-bold text-xl">
									Master Degreev University
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Dolorum labore ullam eos tempore vel perferendis dolorem sit
									neque
								</p>
							</div>
							<div className="w-4 h-4 bg-primary-light block absolute rounded-full -top-1 -left-[10px]"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;

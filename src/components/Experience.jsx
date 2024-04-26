import React from "react";

import { educationDB, experienciaDB } from "../data/db";
import ContentEducation from "./ContentEducation";
import ContentExperience from "./ContentExperience";

const Experience = () => {
	return (
		<div
			id="experiencia"
			className="flex justify-center items-center flex-col min-h-auto pb-20 "
		>
			<h2 className="text-3xl uppercase font-bold text-white mb-10 pt-16">
				Mi <span className="text-primary-light">Experiencia</span>
			</h2>

			<div className="flex gap-7 flex-col md:flex-row max-w-6xl  ">
				{/* ============== Contenedor - Experiencia ============================== */}
				<ContentExperience experienciaDB={experienciaDB} />
				{/*================ Contenedor - Educación ================================= */}
				<ContentEducation educationDB={educationDB} />
			</div>
		</div>
	);
};

export default Experience;

import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const ContentEducation = ({ educationDB }) => {
	return (
		<div className="w-full md:w-1/2">
			<h3 className="text-primary-light uppercase font-bold text-2xl mb-5">
				Educación
			</h3>
			{/* Wrap Educación */}
			<div className="border-l-[.2rem] border-primary-light backdrop-blur-md ">
				{educationDB.map((item) => (
					<div
						key={item.id}
						className="relative pl-4 md:pl-4 mb-5 "
					>
						<div className="border-[.2rem] p-4 text-white rounded-md border-primary-light shadow-4xl shadow-primary">
							<div className=" flex items-center gap-2 text-lg text-primary-light">
								<FaCalendarAlt /> {item.date}
							</div>
							<h3 className="mt-2 font-bold text-xl">{item.title}</h3>
							<p className="mb-2 -mt-1 text-primary-light">{item.place}</p>
							<p>
								{item.content.split("\n").map((line, index) => (
									<React.Fragment key={index}>
										{line}
										<br />
									</React.Fragment>
								))}
							</p>
							{/* 	<p>{item.content}</p> */}
						</div>
						<div className="w-4 h-4 bg-primary-light block absolute rounded-full -top-1 -left-[10px]"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ContentEducation;

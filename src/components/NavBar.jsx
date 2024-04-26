import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { navLinks } from "../data/db";

import { FaBars, FaTimes } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="fixed top-0 w-full bg-slate-950 z-30  bg-opacity-80  ">
			<div className="flex justify-between align-middle max-w-5xl m-auto backdrop-filter backdrop-blur-[4px] p-4">
				<a href="#">
					<span className="font-segunda bg-gradient-to-r from-primary to-primary-dark text-transparent bg-clip-text text-lg">
						Orangel.
					</span>
				</a>
				<div className="flex gap-1 ">
					<button className="text-white text-2xl flex items-center mr-2">
						<MdDarkMode />
					</button>
					<ul className=" gap-4 hidden sm:flex">
						{navLinks.map((link, id) => (
							<a
								className=" relative text-white group flex items-center cursor-pointer "
								key={link.id}
								href={link.href}
							>
								{link.name}
								<span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-md opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
							</a>
						))}
						<button className="text-white bg-gradient-to-r from-primary to-primary-light hover:bg-none transition hover:outline hover:outline-2 hover:outline-primary hover:text-purple-300  rounded-md px-3 py-1 uppercase font-bold ">
							Contáctame
						</button>
					</ul>
					<button
						type="button"
						onClick={toggleMenu}
						className="text-white bg-gradient-to-r from-primary to-primary-light hover:bg-none transition hover:outline hover:outline-2 hover:outline-primary hover:text-purple-300  rounded-md p-2 sm:hidden"
					>
						{isOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>
			<div
				className={`fixed left-0 top-0 h-full sm:hidden bg-gradient-to-t from-primary to-primary-dark p-5 space-y-3 transition-transform transform ${
					isOpen ? "translate-x-0" : "-translate-x-full  "
				}`}
				style={{
					filter: "drop-shadow(120px 0 50px rgba(0, 0, 0, 0.8))",
				}}
			>
				<ul className="space-y-3 ">
					<li>
						<a
							href="#"
							className="font-segunda bg-gradient-to-r from-primary to-primary-dark text-transparent bg-clip-text text-lg"
						>
							Hola Mundo
						</a>
					</li>
					{navLinks.map((link, id) => (
						<a
							className="relative text-white group flex items-center"
							key={link.id}
							href={link.href}
							onClick={() => setIsOpen(!isOpen)}
						>
							{link.name}
							<span className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-md opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
						</a>
					))}
				</ul>
				<button
					className="text-white bg-gradient-to-r from-primary to-primary-light hover:bg-none transition hover:outline hover:outline-2 hover:outline-primary hover:text-purple-300 rounded-md px-3 py-1 uppercase font-bold"
					onClick={toggleMenu}
				>
					Cerrar menú
				</button>
			</div>
		</nav>
	);
};

export default NavBar;

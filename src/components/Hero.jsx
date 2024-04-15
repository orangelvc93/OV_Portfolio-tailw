import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa6";
import perfil from "/img/Perfil.jpg";

import Typewriter from "typewriter-effect";

const Hero = () => {
	return (
		<header className="text-white font-principal flex gap-5 max-w-5xl m-auto items-center my-20  px-5 flex-col md:flex-row">
			<div className="relative">
				<div className="absolute top-0 left-0 w-full h-full">
					{/* Aplica el efecto de difuminado solo al fondo del elemento */}
					<div className="bg-primary w-60 h-60 rounded-full blur-[100px] "></div>
				</div>
				<h1 className="text-4xl text-center md:text-left font-bold pb-5 relative z-10">
					Hi, I'm a
					<br />
					<Typewriter
						options={{
							strings: [
								'<span style="color: #a993fe; font-size: 30px;">Front-end programer</span>',
								'<span style="color: #a993fe; font-size: 30px;">Back-end programer</span>',
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</h1>
				<p className="text-center md:text-left relative z-10">
					Passionate Frontend Developer | Transforming ideas into seamless and
					visually stunning Web solutions.
				</p>
				<button className="bg-gradient-to-r from-primary to-primary-light p-3 w-full mt-4 rounded-md uppercase font-bold relative z-10 md:w-auto md:px-20 hover:bg-none transition hover:outline hover:outline-2 hover:outline-primary hover:text-purple-300">
					Conversa Conmigo
				</button>
			</div>

			{/* Social icons ========================= */}
			<div className="flex gap-5 md:flex-col order-1 md:order-none">
				<a
					href="#"
					className="text-3xl transform transition hover:scale-110 hover:text-primary-light hover:shadow-2xl hover:shadow-purple-200"
				>
					<FaLinkedin />
				</a>
				<a
					href="#"
					className="text-3xl transform transition hover:scale-110 hover:text-primary-light hover:shadow-2xl hover:shadow-purple-200"
				>
					<FaGithub />
				</a>
				<a
					href="#"
					className="text-3xl transform transition hover:scale-110 hover:text-primary-light hover:shadow-2xl hover:shadow-purple-200"
				>
					<FaInstagram />
				</a>
				<a
					href="#"
					className="text-3xl transform transition hover:scale-110 hover:text-primary-light hover:shadow-2xl hover:shadow-purple-200"
				>
					<FaFacebook />
				</a>
			</div>
			{/* Imagen de perfil ============================= */}
			<div className="relative">
				{/* Aplica el efecto de difuminado solo al fondo del elemento */}
				<div className="absolute top-0 left-0 w-full h-full">
					<div className="bg-primary w-40 h-40 block absolute -top-10 rounded-full blur-[100px]"></div>
				</div>

				<div className="relative">
					<div className="border-solid border-primary border-4 rounded-full p-3 border-t-transparent border-b-transparent animate-spin-slow absolute inset-0"></div>
					<img
						src={perfil}
						alt="Imagen de perfil"
						className="w-96 z-10 rounded-full "
					/>
				</div>
			</div>
		</header>
	);
};

export default Hero;

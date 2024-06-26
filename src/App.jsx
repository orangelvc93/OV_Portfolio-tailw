import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import wave from "/img/wave.png";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
	return (
		<>
			<div className="bg-slate-950 w-full h-auto overflow-hidden">
				<div className="fixed  z-1 sm:top-30 top-32">
					<img
						src={wave}
						alt=""
					/>
				</div>
				<NavBar />
				<Hero />
			</div>

			<main>
				<section
					id="skills"
					className="bg-gray-950 w-full h-auto overflow-hidden p-5 backdrop-blur"
				>
					<Skills />
				</section>

				<section
					id="experiencia"
					className="bg-slate-900 w-full h-auto overflow-hidden p-5"
				>
					<Experience />
				</section>
			</main>
		</>
	);
}

export default App;

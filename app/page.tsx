import { Instagram, Twitter, Linkedin, Apple, Play } from "lucide-react";
import { PhotographyCarousel } from "@/components/PhotographyCarousel";

export default function Home() {
	  const photoSlidesA = [
    {
      title: "NYC 1",
      src: "/pictures/nyc/000060730029.jpg",
    },
    {
      title: "NYC 2",
      src: "/pictures/nyc/000060730031.jpg",
    },
    {
      title: "NYC 3",
      src: "/pictures/nyc/000060730032.jpg",
    },
    {
      title: "NYC 4",
      src: "/pictures/nyc/000060730034.jpg",
    },
    {
      title: "NYC 5",
      src: "/pictures/nyc/000060730035.jpg",
    },
    {
      title: "NYC 6",
      src: "/pictures/nyc/000060730036.jpg",
    },
  ];

	const photoSlidesB = [
		{
			title: "Neon Nights",
			src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			title: "Desert Whispers",
			src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];

	return (
		<div className="bg-white dark:bg-black text-white">
			<nav className="fixed left-5 top-1/2 -translate-y-1/2 z-20">
				<ul className="space-y-4">
					<li>
						<a href="#home" className="hover:underline">
							About Me
						</a>
					</li>
					<li>
						<span className="font-semibold">Dev Projects</span>
						<ul className="pl-4 mt-2 space-y-2 text-sm">
							<li>
								<a href="#project-a" className="hover:underline">
									- Edging
								</a>
							</li>
							<li>
								<a href="#project-b" className="hover:underline">
									- Project B
								</a>
							</li>
						</ul>
					</li>
					<li>
						<span className="font-semibold">Photography</span>
						<ul className="pl-4 mt-2 space-y-2 text-sm">
							<li>
								<a href="#photo-a" className="hover:underline">
									- Photo A
								</a>
							</li>
							<li>
								<a href="#photo-b" className="hover:underline">
									- Photo B
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>

			<main className="h-screen overflow-y-scroll snap-y snap-mandatory">
				{/* Welcome Section */}
				<section
					id="home"
					className="h-screen w-full snap-start flex items-center justify-center relative"
					style={{
						backgroundImage: "url('/assets/Hero.gif')",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="absolute inset-0 bg-black opacity-50"></div>
					<div className="text-center z-10 p-8">

						<p className="text-2xl max-w-xl">
							My name is <span className="font-bold">Will</span> aka{" "}
							<span className="font-bold">Iceywil</span> or{" "}
							<span className="font-bold">Wilfried Scherrer</span>.
							<br />
							I&apos;m 24 and always lived in Paris. <br />
						</p>

						<p className="text-2xl max-w-xl">
							I dropped out of business school after 3 years and met Nico who
							showed me it was possible to become a cool nerd.
							<br />
							I started to code and never stopped.
							<br />
							I&apos;m currently finishing{" "}
							<a
								href="https://42.fr/en"
								target="_blank"
								rel="noopener noreferrer"
								className="font-bold hover:underline"
							>
								42 School
							</a>{" "}
							common core in Paris. I love to travel, take pictures, code stuff
							and party.
						</p>
						<div className="flex justify-center space-x-4 mt-6">
							<a
								href="https://instagram.com/iceywil"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Instagram className="w-6 h-6" />
							</a>
							<a
								href="https://x.com/iceywil_"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Twitter className="w-6 h-6" />
							</a>
							<a
								href="https://linkedin.com/in/wilfriedscherrer"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="w-6 h-6" />
							</a>
						</div>
					</div>
				</section>

				{/* Project A Section */}
				<section
					id="project-a"
					className="h-screen w-full snap-start flex items-center justify-center bg-gray-900"
				>
					<div className="text-center">
						<h2 className="text-3xl font-bold">Edging</h2>
						<p className="mt-4">
							Edging is a mobile app that enables news-driven trading.
							<br />
							Basically, it allows anyone to receive tailored financial news
							notifications and trade on the go.
							<br />
							It&apos;s gonna be live on the App Store and Google Play Store in a
							few weeks.
						</p>
						<div className="flex justify-center space-x-4 mt-6">
							<a
								href="https://edging.io"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Apple className="w-6 h-6" />
							</a>
							<a
								href="https://edging.io"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Play className="w-6 h-6" />
							</a>
						</div>
					</div>
				</section>

				{/* Project B Section */}
				<section
					id="project-b"
					className="h-screen w-full snap-start flex items-center justify-center bg-gray-800"
				>
					<div className="text-center">
						<h2 className="text-3xl font-bold">Project B</h2>
						<p className="mt-4">Details about Project B.</p>
					</div>
				</section>

				{/* Photo A Section */}
				<section
					id="photo-a"
					className="h-screen w-full snap-start flex items-center justify-center bg-gray-900"
				>
					<PhotographyCarousel slides={photoSlidesA} />
				</section>

				{/* Photo B Section */}
				<section
					id="photo-b"
					className="h-screen w-full snap-start flex items-center justify-center bg-gray-800"
				>
					<PhotographyCarousel slides={photoSlidesB} />
				</section>
			</main>
		</div>
	);
}

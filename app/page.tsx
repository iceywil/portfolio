import {
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Apple,
  Play,
  ArrowDown,
} from "lucide-react";
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

  return (
    <div className="bg-white dark:bg-black text-white">
      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-20 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <ul className="flex justify-around items-center h-16 text-sm font-bold">
            <li><a href="#home" className="hover:underline">About</a></li>
            <li><a href="#project-a" className="hover:underline">Projects</a></li>
            <li><a href="#photo-a" className="hover:underline">Photos</a></li>
          </ul>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed left-10 top-1/2 -translate-y-1/2 z-20 text-lg font-bold">
        <ul className="space-y-4">
          <li>
            <a href="#home" className="hover:underline">
              About Me
            </a>
          </li>
          <li>
            <a href="#project-a" className="font-semibold hover:underline">
              Dev Projects
            </a>
            <ul className="pl-4 mt-2 space-y-2 text-base">
              <li>
                <a href="#project-a" className="hover:underline">
                  - Edging
                </a>
              </li>
              <li>
                <a href="#project-b" className="hover:underline">
                  - L&apos;École 42 & 42Blockchain Club
                </a>
              </li>
			  <li>
                <a href="#project-c" className="hover:underline">
                  - Luma Bot
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#photo-a" className="font-semibold hover:underline">
              Photography
            </a>
            <ul className="pl-4 mt-2 space-y-2 text-base">
              <li>
                <a href="#photo-a" className="hover:underline">
                  - NYC
                </a>
              </li>
              <li>
                <a href="#photo-b" className="hover:underline">
                  - Dubai
                </a>
              </li>
              <li>
                <a href="#photo-c" className="hover:underline">
                  - Thailand
                </a>
              </li>
              <li>
                <a href="#photo-d" className="hover:underline">
                  - Bikelife in Paris
                </a>
              </li>
              <li>
                <a href="#photo-e" className="hover:underline">
                  - Central Cee
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-snap-stop-always">
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
            <p className="md:text-4xl text-2xl font-bold max-w-4xl">
              My name is <span className="font-bold">Will</span> aka{" "}
              <span className="font-bold">Iceywil</span> or{" "}
              <span className="font-bold">Wilfried Scherrer</span>.
            </p>
            <p className="md:text-lg text-sm max-w-4xl mt-8">
              I&apos;m 24, based in Paris. <br />
              <br />
              I dropped out of business school after 3 years and met Nico 
			  <br />
			  who showed me it was possible to become a cool nerd.
              <br />
			  <br />
              I then started to code and never stopped since.
              <br />
			  <br />
              I love to travel, take pictures, ride motorbikes, code stuff and party.
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
              <a
                href="https://github.com/iceywil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <ArrowDown className="w-8 h-8 animate-bounce" />
          </div>
        </section>

        {/* Project A Section */}
        <section
          id="project-a"
          className="h-screen w-full snap-start relative"
          style={{
            backgroundImage: "url('/assets/3.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="hidden md:flex h-full items-center">
            <div className="z-10 w-[80vw] ml-[20vw]">
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1">
                  {/* Placeholder for future content */}
                </div>
                <div className="col-span-1 text-left pr-10">
                  <h2 className="md:text-5xl text-3xl font-bold">Edging</h2>
                  <p className="mt-4 md:text-lg text-sm">
                    Edging is a mobile app that enables news-driven trading.
                    <br />
                    It allows anyone to receive tailored financial/crypto
                    news notifications and trade on the go perpetuals on Hyperliquid and tokens/stocks on Solana.
                    <br />
                    It&apos;s gonna be live on the App Store and Google Play Store
                    in a few weeks.
                  </p>
                  <div className="flex space-x-4 mt-6">
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
              </div>
            </div>
          </div>
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 p-8 bg-black/50 backdrop-blur-md">
            <h2 className="md:text-5xl text-3xl font-bold">Edging</h2>
            <p className="mt-4 md:text-lg text-sm">
              Edging is a mobile app that enables news-driven trading.
              <br />
              It allows anyone to receive tailored financial/crypto
              news notifications and trade on the go perpetuals on Hyperliquid and tokens/stocks on Solana.
              <br />
              It&apos;s gonna be live on the App Store and Google Play Store
              in a few weeks.
            </p>
            <div className="flex space-x-4 mt-6">
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
          className="h-screen w-full snap-start relative"
          style={{
            backgroundImage: "url('/assets/5.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="hidden md:flex h-full items-center">
            <div className="z-10 w-[80vw] ml-[20vw]">
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1">
                  {/* Placeholder for future content */}
                </div>
                <div className="col-span-1 text-left pr-10">
                  <h2 className="md:text-5xl text-3xl font-bold">
                    L&apos;École 42 & 42Blockchain Club
                  </h2>
                  <p className="mt-4 md:text-lg text-sm">
                    42 is a programming school founded in 2013 in Paris by French entrepreneur Xavier Niel, who also created Station F. Now present in 30+ countries with 50+ campuses, 42 uses a project-based, peer-learning model with no teachers and is open 24/365.
                    <br /><br />
                    I joined in Fall 2023 and I&apos;m currently finishing the common core, which includes projects like:
                    <br />
                    - Minishell (custom shell in C)
                    <br />
                    - Push_swap (sorting algorithm)
                    <br />
                    - Solong (2D game in C)
                    <br />
                    - Webserv (C++ web server)
                    <br />
                    - Transcendence (JS pong game)
                  </p>
                  <p className="mt-4 md:text-lg text-sm">
                    In early 2024, I founded the <a href="https://42blockchain.com" target="_blank" rel="noopener noreferrer" className="text-blue-200">42Blockchain Club</a>:
                    <br />
                    - 25+ events at 42 Paris
                    <br />
                    - 2000+ Discord members
                    <br />
                    - Sponsored by Solana, Starknet, Ledger, and more
                    <br />
                    - $250k+ won by members in hackathons
                    <br /><br />
                    I&apos;ve also participated in and won several blockchain hackathons.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 p-8 bg-black/50 backdrop-blur-md">
            <h2 className="md:text-5xl text-3xl font-bold">
              L&apos;École 42 & 42Blockchain Club
            </h2>
            <p className="mt-4 md:text-lg text-sm">
              42 is a programming school founded in 2013 in Paris by French entrepreneur Xavier Niel, who also created Station F. Now present in 30+ countries with 50+ campuses, 42 uses a project-based, peer-learning model with no teachers and is open 24/365.
              <br /><br />
              I joined in Fall 2023 and I&apos;m currently finishing the common core, which includes projects like:
              <br />
              - Minishell (custom shell in C)
              <br />
              - Push_swap (sorting algorithm)
              <br />
              - Solong (2D game in C)
              <br />
              - Webserv (C++ web server)
              <br />
              - Transcendence (JS pong game)
            </p>
            <p className="mt-4 md:text-lg text-sm">
              In early 2024, I founded the <a href="https://42blockchain.com" target="_blank" rel="noopener noreferrer" className="text-blue-200">42Blockchain Club</a>:
              <br />
              - 25+ events at 42 Paris
              <br />
              - 2000+ Discord members
              <br />
              - Sponsored by Solana, Starknet, Ledger, and more
              <br />
              - $250k+ won by members in hackathons
              <br /><br />
              I&apos;ve also participated in and won several blockchain hackathons.
            </p>
          </div>
        </section>

        {/* Project C Section */}
        <section
          id="project-c"
          className="h-screen w-full snap-start relative"
          style={{
            backgroundImage: "url('/assets/1.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="hidden md:flex h-full items-center">
            <div className="z-10 w-[80vw] ml-[20vw]">
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1">
                  {/* Placeholder for future content */}
                </div>
                <div className="col-span-1 text-left pr-10">
                  <h2 className="md:text-5xl text-3xl font-bold">
                    Luma Bot
                  </h2>
                  <p className="mt-4 md:text-lg text-sm">
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 p-8 bg-black/50 backdrop-blur-md">
            <h2 className="md:text-5xl text-3xl font-bold">
              Luma Bot
            </h2>
            <p className="mt-4 md:text-lg text-sm">
            </p>
          </div>
        </section>

        {/* Photo A Section */}
        <section
          id="photo-a"
          className="h-screen w-full snap-start relative"
          style={{
            backgroundImage: "url('/assets/2.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="hidden md:flex h-full items-center">
            <div className="z-10 w-[80vw] ml-[20vw]">
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1 flex justify-center">
                  <PhotographyCarousel slides={photoSlidesA} />
                </div>
                <div className="col-span-1 text-left pr-10">
                  <h2 className="md:text-5xl text-3xl font-bold">NYC</h2>
                  <p className="mt-4 md:text-lg text-sm">
                    I really enjoyed NYC, it&apos;s really similar to Paris especially Soho and south Manhattan.
                    <br/>
                    It also felt like I were at the center of the world and where things were happening.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 p-8 bg-black/50 backdrop-blur-md">
            <h2 className="md:text-5xl text-3xl font-bold">NYC</h2>
            <p className="mt-4 md:text-lg text-sm">
              I really enjoyed NYC, it&apos;s really similar to Paris especially Soho and south Manhattan.
              <br/>
              It also felt like I were at the center of the world and where things were happening.
            </p>
          </div>
        </section>

        {/* Photo B Section */}
        <section
          id="photo-b"
          className="h-screen w-full snap-start relative"
          style={{
            backgroundImage: "url('/assets/4.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hidden md:flex h-full items-center">
            <div className="z-10 w-[80vw] ml-[20vw]">
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1 flex justify-center">
                  {/* <PhotographyCarousel slides={photoSlidesB} /> */}
                </div>
                <div className="col-span-1 text-left pr-10">
                  <h2 className="md:text-5xl text-3xl font-bold">Dubai</h2>
                  <p className="mt-4 md:text-lg text-sm">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 p-8 bg-black/50 backdrop-blur-md">
            <h2 className="md:text-5xl text-3xl font-bold">Dubai</h2>
            <p className="mt-4 md:text-lg text-sm">
              
            </p>
          </div>
        </section>
		{/* Photo C Section */}
        <section
          id="photo-c"
          className="h-screen w-full snap-start bg-gray-800 relative"
        >
          <div className="hidden md:flex h-full items-center">
            <div className="z-10 w-[80vw] ml-[20vw]">
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1 flex justify-center">
                  {/* <PhotographyCarousel slides={photoSlidesB} /> */}
                </div>
                <div className="col-span-1 text-left pr-10">
                  <h2 className="md:text-5xl text-3xl font-bold">Thailand</h2>
                  <p className="mt-4 md:text-lg text-sm">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 p-8 bg-black/50 backdrop-blur-md">
            <h2 className="md:text-5xl text-3xl font-bold">Thailand</h2>
            <p className="mt-4 md:text-lg text-sm">
              
            </p>
          </div>
        </section>
		{/* Photo D Section */}
        <section
          id="photo-d"
          className="h-screen w-full snap-start bg-gray-800 relative"
        >
          <div className="hidden md:flex h-full items-center">
            <div className="z-10 w-[80vw] ml-[20vw]">
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1 flex justify-center">
                  {/* <PhotographyCarousel slides={photoSlidesB} /> */}
                </div>
                <div className="col-span-1 text-left pr-10">
                  <h2 className="md:text-5xl text-3xl font-bold">Bikelife in Paris</h2>
                  <p className="mt-4 md:text-lg text-sm">
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 p-8 bg-black/50 backdrop-blur-md">
            <h2 className="md:text-5xl text-3xl font-bold">Bikelife in Paris</h2>
            <p className="mt-4 md:text-lg text-sm">
            </p>
          </div>
        </section>
		{/* Photo E Section */}
        <section
          id="photo-e"
          className="h-screen w-full snap-start bg-gray-800 relative"
        >
          <div className="hidden md:flex h-full items-center">
            <div className="z-10 w-[80vw] ml-[20vw]">
              <div className="grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1 flex justify-center">
                  {/* <PhotographyCarousel slides={photoSlidesB} /> */}
                </div>
                <div className="col-span-1 text-left pr-10">
                  <h2 className="md:text-5xl text-3xl font-bold">Central Cee</h2>
                  <p className="mt-4 md:text-lg text-sm">
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 p-8 bg-black/50 backdrop-blur-md">
            <h2 className="md:text-5xl text-3xl font-bold">Central Cee</h2>
            <p className="mt-4 md:text-lg text-sm">
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

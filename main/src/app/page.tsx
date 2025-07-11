import Image from "next/image";
import Link from "next/link";
import Contact from "./contact/page"

export function Navbar(){
  return(
    <div>
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                </li>
                <li>
                  <Link href="/stories" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Stories</Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                </li>
              </ul>
            </div>
      </nav>
    </div>
  );
}
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)] p-8 sm:p-20">
      <main className="flex flex-col items-center sm:items-start gap-10 max-w-4xl mx-auto">
        <Navbar />
       
          
        

        <div className="flex gap-4 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-2 text-sm font-medium hover:opacity-80 transition"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="rounded-full border border-gray-300 dark:border-white/30 px-6 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Projects
          </a>
          
          <a
            href="https://github.com/ghecode"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-300 dark:border-white/30 px-6 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact
          </a>
        </div>

        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I'm Grace.</h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Aspiring software engineer & economics student passionate about building tools that make an impact.
          </p>
        </div>

        {/* Profile Image */}
        <Image
          className="rounded-full border dark:invert"
          src="/profile.jpg" // put your image in /public as profile.jpg
          alt="Grace's headshot"
          width={160}
          height={160}
        />

        <div className="flex-row"> 
          <Image
            className=""
            src="/front.png" // put your image in /public as profile.jpg
            alt="gate"
            width={500}
            height={500}
          />
          <div className="flex-col"> 
          <h1>Projects </h1> 
          <p>1 Spotify Taste</p>
          </div>
        </div>
      
        {/* Projects Section */}
        <section id="projects" className="w-full mt-12">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Project Card */}
            <div className="rounded-xl border border-gray-200 dark:border-white/20 p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">SeedSwap</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A React web app for trading and planting virtual seeds, featuring chat, real-time updates, and a garden interface.
              </p>
              <a
                href="https://github.com/yourusername/seedswap"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                View on GitHub →
              </a>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-white/20 p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Spotify Mood Board</h3>
              <p className="text-sm text-muted-foreground mb-4">
                AWS Lambda-powered Python backend that analyzes your Spotify playlist’s mood and creates a visual dashboard.
              </p>
              <a
                href="https://github.com/yourusername/spotify-mood"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24 text-sm text-center text-muted-foreground">
        © {new Date().getFullYear()} Grace W. · Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}


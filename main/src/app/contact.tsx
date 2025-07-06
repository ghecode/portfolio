import Image from "next/image";
import g from "./public/gitub.png";
import l from "./publiclinked.png";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)] p-8 sm:p-20">
      <main className="flex flex-col items-center sm:items-start gap-10 max-w-4xl mx-auto">
        <p>Contact Me</p>
          {/* Call-to-Action Buttons */}
        <div className="flex gap-4 flex-wrap">
            <img src="images/github.png"></img>

          <a
            href="https://www.linkedin.com/in/grace-he-915983225/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-2 text-sm font-medium hover:opacity-80 transition"
          >
            LinkedIn
          </a>

          <img src="images/linked.png"></img>
          <a
            href="#projects"
            className="rounded-full border border-gray-300 dark:border-white/30 px-6 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/yourusername"
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


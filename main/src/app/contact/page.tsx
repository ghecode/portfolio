import Image from "next/image";
import l from "./publiclinked.png";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)] p-8 sm:p-20">
      <main className="flex flex-col items-center sm:items-start gap-10 max-w-4xl mx-auto">
        <p>Contact Me</p>
          {/* Call-to-Action Buttons */}
        <div className="flex gap-4 flex-wrap">
            <img src="images/github.png"></img>

          <Image
          src="/github.png"
          width={50}
          height={50}
          alt="Linkedin Logo"
        />

         <Image
          src="/linked.png"
          width={50}
          height={50}
          alt="Linkedin Logo"
        />
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
      </main>
      {/* Footer */}
      <footer className="mt-24 text-sm text-center text-muted-foreground">
        © {new Date().getFullYear()} Grace W. · Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}


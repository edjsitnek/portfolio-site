'use client';
import Image from "next/image";

function handleUpButtonClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.history.pushState({}, '', '/');
}

export default function Footer() {
  return (
    <footer className="relative bg-[var(--navbar-bg)] text-gray-200 py-6">
      <div className="flex flex-col items-center gap-4 px-4">
        {/* Socials */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/ethan-sitnek-7203971a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--blue5)] transition-colors"
            aria-label="LinkedIn"
          >
            <Image
              src="/icons/linkedin-1-svgrepo-com.svg"
              alt="LinkedIn icon and link to Ethan Sitnek's profile"
              width={60}
              height={60}
              className=""
            />
          </a>
          <a
            href="https://github.com/edjsitnek"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--blue5)] transition-colors"
            aria-label="GitHub"
          >
            <Image
              src="/icons/github-svgrepo-com.svg"
              alt="Github icon and link to Ethan Sitnek's profile"
              width={60}
              height={60}
              className=""
            />
          </a>
        </div>
        {/* Copyright */}
        <div className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Ethan Sitnek. All rights reserved.
        </div>
      </div>
      <button
        className="absolute bottom-12 right-8 p-2 rounded-full bg-[var(--blue5)] hover:bg-[var(--blue4)]"
        onClick={() => handleUpButtonClick()}
        aria-label="Scroll to top"
      >
        <Image
          src="/icons/chevron-up-svgrepo-com.svg"
          alt="Scroll to top icon"
          width={30}
          height={30}
        />
      </button>
    </footer>
  );
}
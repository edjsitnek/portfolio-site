import Image from 'next/image'

export default function HeroSection() {
  const name = "Ethan Sitnek".split("");
  return (
    <div className="animate-[fade-in_1s_ease] min-h-screen bg-gradient-to-b from-[var(--blue3)] via-[var(--background)] to-[var(--blue1)] flex flex-col justify-center items-center text-white p-6 md:p-12">
      <Image
        src="/images/profile-pic.png"
        alt="Small picture of Ethan Sitnek"
        width={150}
        height={150}
        className="object-cover rounded-lg"
        sizes="(min-width: 768px) 40vw, 100vw"
        priority
      />
      <h1 className="text-5xl md:text-6xl font-bold m-2 text-center text-[var(--blue5)] whitespace-nowrap">
        {name.map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-200 hover:scale-125 hover:text-[var(--blue4)] cursor-default"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
      <h2 className="text-3xl mb-10">Web Developer</h2>


      <div className="flex gap-4">
        <a href="#projects" className="bg-[var(--blue5)] px-6 py-2 rounded text-[var(--background)] font-semibold hover:bg-[var(--blue4)]">
          View My Work
        </a>
        <a href="#contact" className="border border-[var(--blue5)] px-6 py-2 rounded text-[var(--blue5)] font-semibold hover:bg-[var(--blue4)] hover:text-[var(--background)]">
          Contact
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
          <Image
            src="/icons/chevron-down-svgrepo-com.svg"
            alt="Scroll down icon"
            width={32}
            height={32}
            className="text-[var(--blue5)] animate-bounce"
          />
        </a>
      </div>
    </div>
  );
}
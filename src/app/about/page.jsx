import Image from 'next/image';

const techStack = [
  { name: "JavaScript", src: "/icons/js-svgrepo-com.svg" },
  { name: "React", src: "/icons/react-svgrepo-com.svg" },
  { name: "Next.js", src: "/icons/nextjs-icon-svgrepo-com.svg" },
  { name: "HTML5", src: "/icons/html-5-svgrepo-com.svg" },
  { name: "CSS3", src: "/icons/css-3-svgrepo-com.svg" },
  { name: "Git", src: "/icons/git-svgrepo-com.svg" },
  { name: "Python", src: "/icons/python-svgrepo-com.svg" },
  { name: "Kotlin", src: "/icons/jb-kotlin-svgrepo-com.svg" },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 md:flex md:gap-10">

      {/* Bio Column */}
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold ml-6 mb-6 text-[var(--blue5)]">About Me</h1>
        <p className="mb-6">
          Hi! I'm Ethan. I graduated with a Bachelor's in Computer Science from Towson University in 2022
          and I'm looking for my first full-time role as a web developer or in a similar entry-level tech position.
          I enjoy working on projects that challenge me to learn new skills and find creative solutions, like
          building Lotusify, my daily song title guessing game.
        </p>
        <p className="mb-6">
          Outside of coding, I love music (whether I'm at a concert or playing piano), getting outdoors,
          and hanging out with my girlfriend and our three cats. I’ve worked in food service for over 11 years,
          including several years in management, where I’ve developed strong teamwork, reliability, and communication
          skills. I'm really excited to take the next step in my career, bring this experience to a tech role,
          and make a positive impact as part of a collaborative team.
        </p>
      </div>

      {/* Technical Column */}
      <div className="md:w-1/3 flex flex-col items-center mt-8 md:mt-0">
        <h2 className="text-xl font-semibold mb-4 text-[var(--blue5)]">Technical Skills</h2>
        <div className="grid grid-cols-4 sm:grid-cols-3 gap-y-6 gap-x-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center group transition-all">
              <Image
                src={tech.src}
                alt={tech.name}
                width={40}
                height={40}
                className="mb-2 transition-transform duration-200 group-hover:scale-125"
                title={tech.name}
              />
              <span className="text-xs text-center text-gray-200 transition-colors duration-200 group-hover:text-[var(--blue5)]">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

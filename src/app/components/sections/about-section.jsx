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

export default function AboutSection() {
  return (
    <div className="max-w-5xl mx-auto pt-24 md:pt-36 md:pb-12 px-4 md:flex md:gap-10">

      {/* Bio Column */}
      <div className="md:w-2/3">
        <h1 className="text-4xl font-bold md:ml-6 mb-8 text-center md:text-left text-[var(--blue5)]">About Me</h1>
        <p className="mb-6 py-2 px-4 md:px-0 md:tracking-wide text-sm leading-5.5 md:leading-8 text-center md:text-left md:text-lg">
          Hi! I'm Ethan. I graduated with a Bachelor's in Computer Science from Towson University in 2022
          and I'm currently pursuing a career in IT support and technical operations.
          Recently, I've been completing hands-on training through Per Scholas, where I've been
          building practical skills in troubleshooting, system administration, networking, and
          customer support, as well as working toward getting my CompTIA A+ certification.
        </p>
        <p className="mb-6 py-2 px-4 md:px-0 md:tracking-wide text-sm leading-5.5 md:leading-8 text-center md:text-left md:text-lg">
          I enjoy working through technical problems step by step and helping users get back up and running efficiently.
          My background in software development allows me to approach issues with a deeper understanding of
          how systems work under the hood. I've built projects like Lotusify, a daily song title guessing game,
          and continue to explore ways to combine my development experience with IT support skills.
        </p>
        <p className="mb-6 py-2 px-4 md:px-0 md:tracking-wide text-sm leading-5.5 md:leading-8 text-center md:text-left md:text-lg">
          Outside of tech, I love music (whether I'm at a concert or playing piano), getting outdoors,
          and hanging out with my girlfriend and our three cats. I’ve worked in food service for over 12 years,
          including several years in management, where I’ve developed strong teamwork, reliability, and communication
          skills. I'm really excited to take the next step in my career, bring this experience to a tech role,
          and make a positive impact as part of a collaborative team.
        </p>
      </div>

      {/* Technical Column */}
      <div className="md:w-1/3 flex flex-col items-center mt-8 md:mt-0">
        <h2 className="text-3xl font-semibold mb-4 text-[var(--blue5)]">Technical Skills</h2>

        {/* IT Skills Section */}
        <div className="mb-6 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2 text-[var(--blue4)]">IT Skills</h3>
          <ul className="text-sm md:text-base text-gray-200 space-y-1">
            <li>Troubleshooting (Windows, basic Linux)</li>
            <li>Networking Fundamentals (DNS, DHCP, TCP/IP)</li>
            <li>Remote Access & Support Tools</li>
            <li>System Administration Basics</li>
            <li>Customer Support & Ticket Handling</li>
          </ul>
        </div>

        {/* Dev Skills Section */}
        <h3 className="text-xl font-semibold mb-3 text-[var(--blue4)]">Development</h3>
        <div className="grid grid-cols-4 sm:grid-cols-3 gap-y-6 gap-x-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center group transition-all">
              <Image
                src={tech.src}
                alt={tech.name}
                width={50}
                height={50}
                className="mb-2 transition-transform duration-200 group-hover:scale-125"
                title={tech.name}
              />
              <span className="text-s text-center text-gray-200 transition-colors duration-200 group-hover:text-[var(--blue5)]">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

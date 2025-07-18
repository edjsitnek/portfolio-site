import Image from 'next/image'

export default function ProjectCard({ title, description, technologies, liveLink, githubLink, imageUrl, imageAlt }) {
  return (
    <div className="bg-[var(--blue3)] border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="md:flex min-h-[300px] gap-6">
        {/* Image on the left */}
        <div className="md:w-2/5 w-full relative aspect-[4/3] md:aspect-auto md:h-auto h-48 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={imageAlt || `${title} screenshot`}
            fill
            className="object-cover rounded-lg"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>

        {/* Content on the right */}
        <div className="md:w-3/5 w-full p-4 flex flex-col justify-between">
          <h3 className="text-xl md:text-2xl text-center md:text-left font-semibold mb-3">{title}</h3>
          <p className="md:text-lg text-gray-200 mb-4">{description}</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[var(--blue5)] text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--blue4)] text-white px-4 py-2 rounded hover:bg-[var(--blue5)]"
              >
                Live Demo
                <Image
                  src="/icons/external-link-svgrepo-com.svg"
                  alt="External link icon"
                  width={16}
                  height={16}
                  className="inline ml-1"
                />
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--blue4)] text-white px-4 py-2 rounded hover:bg-[var(--blue5)]"
              >
                GitHub
                <Image
                  src="/icons/github-svgrepo-com.svg"
                  alt="GitHub icon"
                  width={18}
                  height={18}
                  className="inline ml-1 mb-1"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

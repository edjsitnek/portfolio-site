import ProjectCard from "../project-card";

export default function ProjectsSection() {
  return (
    <div className="max-w-5xl mx-auto pt-24 px-4">
      <h2 className="text-4xl font-bold md:ml-6 mb-8 text-center md:text-justify text-[var(--blue5)]">Projects</h2>
      <div className="flex flex-col gap-6">
        <ProjectCard
          title="Lotusify"
          description="Lotusify is a daily game made for fans of the band Lotus. Inspired by other web games like Wordle and Spellify, guess the song title of the day in a hangman-like style. Fully responsive, accessible, and SEO optimized."
          technologies={["JavaScript", "React", "Cloudflare Workers"]}
          liveLink="https://www.lotusify-game.com/"
          githubLink="https://github.com/edjsitnek/lotusify"
          imageUrl="/images/lotusify-screenshot.png"
          imageAlt="Lotusify game screenshot"
        />
        <ProjectCard
          title="Wordle Clone"
          description="A simple Wordle clone made with React. Use onscreen keyboard or physical keyboard to play endless games of Wordle as stats update with each game."
          technologies={["JavaScript", "React"]}
          liveLink="https://75901ed2.wordle-clone-5qq.pages.dev/"
          githubLink="https://github.com/edjsitnek/wordle-clone"
          imageUrl="/images/wordle-clone-screenshot.png"
          imageAlt="Wordle Clone screenshot"
        />
      </div>
    </div>
  );
}

import Image from 'next/image'
import Navbar from './components/navbar';
import AboutSection from './components/about-section';
import ProjectsSection from './components/projects-section';
import ContactSection from './components/contact-section';

export default function Page() {
  return (
    <main className="bg-[var(--background)] text-white">
      <Navbar />
      <Home />
      <section id="about"><AboutSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section>
    </main>
  )
}

function Home() {
  return (
    <div className="bg-[var(--background)] flex flex-col justify-center items-center text-white p-6 md:p-12">
      <Image
        src="/images/profile-pic.png"
        alt="Small picture of Ethan Sitnek"
        width={150}
        height={150}
        className="object-cover rounded-lg"
        sizes="(min-width: 768px) 40vw, 100vw"
        priority
      />
      <h1 className="text-5xl font-bold m-2 text-[var(--blue5)]">Ethan Sitnek</h1>
      <h2 className="text-2xl mb-10">Web Developer</h2>


      <div className="flex gap-4">
        <a href="#projects" className="bg-[var(--blue5)] px-6 py-2 rounded text-[var(--background)] font-semibold hover:bg-[var(--blue4)]">View My Work</a>
        <a href="#contact" className="border border-[var(--blue5)] px-6 py-2 rounded text-[var(--blue5)] font-semibold hover:bg-[var(--blue4)] hover:text-[var(--background)]">Contact</a>
      </div>
    </div>
  );
}

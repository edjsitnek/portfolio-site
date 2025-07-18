import Navbar from './components/navbar';
import HeroSection from './components/sections/hero-section';
import AboutSection from './components/sections/about-section';
import ProjectsSection from './components/sections/projects-section';
import ContactSection from './components/sections/contact-section';
import Footer from './components/footer';

export default function Page() {
  return (
    <main className="bg-[var(--background)] text-white">
      <section id="hero"><HeroSection /></section>
      <Navbar />
      <section id="about"><AboutSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section>
      <footer><Footer /></footer>
    </main>
  )
}

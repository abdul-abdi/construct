import Hero from '@/components/layout/Hero';
import ArchitectureProcess from '@/components/layout/ArchitectureProcess';
import Services from '@/components/layout/Services';
import Projects from '@/components/layout/Projects';
import About from '@/components/layout/About';
import Contact from '@/components/layout/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ArchitectureProcess />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

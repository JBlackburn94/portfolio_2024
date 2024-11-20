import Hero from "./pageComponents/Hero";
import Projects from "./pageComponents/Projects";
import Skills from "./pageComponents/Skills";
import Contact from "./pageComponents/Contact";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-mona-sans)]">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

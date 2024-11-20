import Hero from "./pageComponents/Hero";
import Skills from "./pageComponents/Skills";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-mona-sans)]">
      <Hero />
      <Skills />
    </div>
  );
}

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="my-5 mx-5 md:mx-10 py-5 px-5 md:px-10">
      <h1 className="font-black text-[2.986rem]">Recent Projects.</h1>
      <div className="flex flex-wrap justify-center lg:justify-start items-start gap-7 w-full mt-5">
        <ProjectCard
          title="ShiftMate"
          tech={[
            "Next.js",
            "React",
            "Typescript",
            "TailwindCSS",
            "GSAP",
            "Nodemailer",
          ]}
          description="ShiftMate is a UK-based removals company. I designed and developed
          their website to help boost their business and streamline the customer
          experience, making it quick and easy for clients to request a quote."
          buttonLinks={{
            github: "https://github.com/JBlackburn94/shift-mate",
            live: "https://shiftmate.co.uk/",
          }}
        />
        <ProjectCard
          title="Artio"
          tech={["Next.js", "React", "Typescript", "TailwindCSS", "GSAP"]}
          description="Artio is a UK-based band that approached me with a concise design brief, asking me to transform it into a complete website. This site now serves as a central hub where fans can access the latest news, merchandise, tickets, and music."
          buttonLinks={{
            github: "https://github.com/JBlackburn94/artio",
            live: "https://artiomusic.com/",
          }}
        />
        <ProjectCard
          title="Beauty School"
          tech={["Next.js", "React", "Typescript", "TailwindCSS", "GSAP"]}
          description="Beauty School is a UK-based band. I designed and developed their website to serve as a central hub for fans, offering the latest news, merchandise, tickets, and music all in one place."
          buttonLinks={{
            github: "https://github.com/JBlackburn94/bs-web",
            live: "https://bsweb-psi.vercel.app",
          }}
        />
      </div>
    </section>
  );
}

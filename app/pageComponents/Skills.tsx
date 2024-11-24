import { FaMapPin } from "react-icons/fa";
import TechStackCard from "./TechStackCard";

export default function Skills() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 min-h-screen overflow-hidden my-5 mx-5 md:mx-10"
    >
      <div className="min-h-[80vh] w-full md:w-[70%] overflow-hidden py-5 px-5 md:px-10">
        <h1 className="text-[2.9rem] font-black">Hello!</h1>
        <h2 className="text-[2.488rem] font-semibold">I&apos;m Jason.</h2>
        <span className="flex items-center gap-2">
          <p className="text-[1.5rem]">United Kingdom</p>
          <FaMapPin className="text-[1.5rem] text-red-500" />
        </span>
        <div className="font-light leading-8">
          <p>
            A highly motivated Software Developer, specialising in crafting
            responsive, user-friendly and accessible interfaces for both web and
            mobile applications. My proficiency in HTML, CSS, and JavaScript,
            combined with my experience creating ui/ux mockups with design
            software such as Figma, and my hands-on experience with modern
            frameworks, provides me with the skills needed to succeed. I have a
            strong track record of cross-functional collaboration, and I pride
            myself on my ability to create responsive, pixel-perfect websites
            that are both visually appealing, highly accessible and function
            seamlessly across various devices and browsers.
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center">
        <TechStackCard />
      </div>
    </section>
  );
}

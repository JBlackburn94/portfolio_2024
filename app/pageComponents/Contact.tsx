import Image from "next/image";
import heroBg from "../../public/profile-image.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="my-5 mx-5 md:mx-10 py-5 px-5 md:px-10">
      <div className="flex flex-col justify-center items-center gap-7 mt-5">
        <div className="flex flex-col justify-start items-center w-[85vw] md:w-[40vw]">
          <div className="h-[250px] w-[250px] overflow-hidden rounded-full relative">
            <Image
              src={heroBg}
              alt="An image of Jason Blackburn"
              className="absolute top-0 left-0 object-cover h-full w-full scale-150"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 w-[85vw] md:w-[60%]">
            <h5 className="font-semibold text-[1.44rem]">
              I&apos;m currently looking for a new full time role.
            </h5>
            <p className="font-light">
              I am always open to discussing new projects, creative ideas, or
              opportunities to work together. Feel free to reach out to me via
              email or social media.
            </p>
            <p>jblackburndeveloper@gmail.com</p>
            <span className="flex gap-4">
              <Link href="https://github.com/JBlackburn94" target="_blank">
                <FaGithub className="text-[2.5rem]" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jason-blackburn-frontend-developer/"
                target="_blank"
              >
                <FaLinkedin className="text-[2.5rem]" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

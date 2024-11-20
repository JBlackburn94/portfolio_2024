import Image from "next/image";
import heroBg from "../../public/profile-image.webp";
import heroFore from "../../public/DSCF7348 copy.webp";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-white relative">
      <div className="flex flex-col justify-start items-end text-right h-full w-full bg-black z-10 bg-opacity-50 py-[90px] md:py-10 px-5">
        <h1 className="font-black uppercase text-[3rem] md:text-[7rem] leading-[50px] md:leading-[90px] sticky top-0">
          Jason <br />
          Blackburn
        </h1>
        <h2 className="font-thin text-[1.5rem] md:text-[2rem] uppercase">
          Frontend Developer
        </h2>
      </div>
      <Image
        src={heroFore}
        alt="A cut out of Jason Blackburn"
        className="absolute top-0 left-0 h-full w-full object-cover z-20"
      />
      <Image
        src={heroBg}
        alt="A picture of Jason Blackburn"
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
      />
    </section>
  );
}

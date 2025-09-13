import { Orbit } from "next/font/google";

const orbit = Orbit({ weight: ["400"] });

export default function War() {
  return (
    <section className="h-screen w-screen bg-black flex justify-center items-center">
      <p className={`${orbit.className} text-xl`}>Let the battle begin.</p>
    </section>
  );
}

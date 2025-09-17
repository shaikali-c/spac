import { Doto } from "next/font/google";

const orbit = Doto({ weight: ["500"], subsets: ["latin"] });

export default function War() {
  return (
    <section className="h-dvh w-screen bg-black flex justify-center items-center md:p-0 p-10">
      <p className={`${orbit.className} text-lg`}>
        Made this site just to flex my{" "}
        <span className="text-sky-600">skills </span>a bit.
      </p>
    </section>
  );
}

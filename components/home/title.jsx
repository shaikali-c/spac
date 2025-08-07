import { Newsreader } from "next/font/google";

const dmFont = Newsreader({ subsets: ["latin"], weight: ["500"] });
export default function HomeTitle({ text }) {
  return <h1 className={`text-4xl md:text-9xl uppercase`}>{text}</h1>;
}

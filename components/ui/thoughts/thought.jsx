import { Brain, Dot, Heart } from "lucide-react";

export default function Thought({ content }) {
  return (
    <div className="bg-neutral-900 p-4 rounded-xl px-6 border-1 border-neutral-900 hover:border-neutral-800 mx-8 flex flex-col gap-2">
      <h2 className="text-sm text-neutral-400 flex items-center">
        Jupiter <Dot size={15} /> 2h
      </h2>
      <p className="leading-7">{content}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Brain size={18} className="text-sky-600" />
          <p>1.3k</p>
        </div>
      </div>
    </div>
  );
}

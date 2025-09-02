import { DoorOpen, Pencil } from "lucide-react";

export default function TabBtn({ text, action, setStep, active }) {
  return (
    <button
      className={`py-4 border-b-2 border-neutral-800 flex items-center gap-2 justify-center transition-all cursor-pointer hover:border-b-sky-600 ${
        action === "Create" ? "border-r-0" : ""
      } ${active ? "border-b-sky-600" : ""}`}
      onClick={() => setStep(action)}
    >
      {action === "Create" ? <Pencil size={19} /> : <DoorOpen size={19} />}
      {text}
    </button>
  );
}

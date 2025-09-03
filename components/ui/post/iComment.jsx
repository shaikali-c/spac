import { MessageCircle } from "lucide-react";

export default function IComment({ amount }) {
  return (
    <div className="flex gap-1.5 items-center hover:text-rose-600 cursor-pointer select-none">
      <MessageCircle size={22} />
      <p>{amount}</p>
    </div>
  );
}

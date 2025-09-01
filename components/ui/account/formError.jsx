import { CircleX } from "lucide-react";

export default function FormError({ errMsg }) {
  return (
    <p className="text-red-500 text-sm flex gap-1 items-center">
      <CircleX size={15} />
      {errMsg}
    </p>
  );
}

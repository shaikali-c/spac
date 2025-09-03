import { CheckCheck } from "lucide-react";

export default function FormSuccess() {
  return (
    <p className="text-green-600 text-sm flex gap-1 items-center">
      <CheckCheck size={17} />
      Everything looks good!
    </p>
  );
}

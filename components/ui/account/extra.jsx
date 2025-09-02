import { Check } from "lucide-react";

export default function AccountExtraInfo() {
  return (
    <div className="text-sm text-neutral-400 flex gap-1 md:items-center">
      <Check size={17} className="mt-0.5 md:mt-0" />
      <p>
        By creating an account you agree to{" "}
        <span className="text-neutral-300 underline">terms & conditions.</span>
      </p>
    </div>
  );
}

import { useState } from "react";

export default function AccountInput({ placeholder, ref }) {
  const [err, setErr] = useState(false);
  return (
    <input
      type="text"
      ref={ref}
      placeholder={placeholder}
      className="p-3 px-5 border-1 border-neutral-800 rounded-sm focus:border-neutral-500 outline-0"
    />
  );
}

"use client";

import { useEffect, useState } from "react";

export default function Tag() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, []);
  return (
    <p className={`${active ? "opacity-100" : "opacity-0"} transition-all`}>
      A tag
    </p>
  );
}

"use client";

import { useState } from "react";

export default function CreateInput({
  placeholder,
  children,
  inputValue,
  setPostData,
  postData,
  keyValue,
}) {
  const [focus, setFocus] = useState(false);
  const handleValueChange = (e) => {
    setPostData({ ...postData, [keyValue]: e.target.value });
  };
  return (
    <div
      className={`flex items-center border-b-2 border-neutral-800 transition-all ${
        focus ? "border-sky-600" : ""
      }`}
    >
      {children}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-5 pl-3 outline-0  focus:border-sky-600 "
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={inputValue || ""}
        onChange={handleValueChange}
        maxLength={keyValue === "imageLink" ? 500 : 50}
      />
    </div>
  );
}

"use client";
import CreateCol1 from "@/components/ui/create/columns/col1";
import CreateCol2 from "@/components/ui/create/columns/col2";
import { useState } from "react";

export default function Create() {
  const [postData, setPostData] = useState({});
  return (
    <section className="w-screen h-screen justify-center flex items-center p-5 md:p-0">
      <div className="h-170 max-w-250 bg-neutral-900 rounded-2xl grid md:grid-cols-[minmax(0,2fr)_1fr] grid-cols-1 overflow-hidden">
        <CreateCol1 postData={postData} setPostData={setPostData} />
        <CreateCol2 postData={postData} />
      </div>
    </section>
  );
}

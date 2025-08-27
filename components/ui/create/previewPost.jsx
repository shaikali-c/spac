import { useEffect, useState } from "react";
import Post from "../post/post";

export default function PreviewPost({ postData }) {
  const [previewLikes, setPreviewLikes] = useState(0);
  useEffect(() => {
    setPreviewLikes(Math.floor(Math.random() * 200000));
  }, []);
  return (
    <Post
      previewMode="true"
      likes={previewLikes}
      data={{ ...postData, time: "2h" }}
    />
  );
}

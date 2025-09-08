import Post from "@/components/ui/post/post";

const dummy_posts = [
  {
    userName: "ShaikALi",
    time: "2h",
    caption: "Hubble's panoramic view of a star-forming region.",
    imageLink: "https://cdn.esahubble.org/archives/images/screen/heic1206a.jpg",
  },
  {
    userName: "Marwaan C",
    time: "7d",
    caption:
      "Hubble view of the huge star formation region N11 in the Large Magellanic Cloud",
    imageLink: "https://cdn.esahubble.org/archives/images/screen/heic1011a.jpg",
  },

  {
    userName: "Astron Maate",
    time: "2h",
    caption:
      "Surrounded by bright stars, towards the upper middle of the frame we see a small young stellar object (YSO) known as SSTC2D J033038.2+303212.",
    imageLink: "https://cdn.esahubble.org/archives/images/screen/potw1434a.jpg",
  },
  {
    userName: "ShaikALi",
    time: "2h",
    caption: "Hubble's panoramic view of a star-forming region.",
    imageLink: "https://cdn.esahubble.org/archives/images/screen/heic1011a.jpg",
  },
];

export default function Discover() {
  return (
    <div className="flex items-center justify-center flex-col">
      {dummy_posts.map((elem, id) => (
        <Post data={elem} key={id} />
      ))}
    </div>
  );
}

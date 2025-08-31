import IComment from "./iComment";
import ILike from "./iLike";

export default function PostInteraction({ likes, comments }) {
  return (
    <div className="flex items-center pb-0 gap-5 ">
      <ILike amount={likes} />
      <IComment amount={comments} />
    </div>
  );
}

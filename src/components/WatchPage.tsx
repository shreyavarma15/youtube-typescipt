import { useSearchParams } from "react-router-dom";
import CommentList, { addReplyCount } from "./CommentList";
import { COMMENTS_DATA } from "../utils/constants";

const WatchPage = () => {
  const [queryParams] = useSearchParams();

  const commentsWithCount = addReplyCount(COMMENTS_DATA);

  return (
    <div>
      <div className="p-3 m-3 flex">
        <iframe
          width="800"
          height="350"
          src={
            "https://www.youtube.com/embed/" +
            queryParams.get("v") +
            "?autoplay=1"
          }
          title="Learn DOM Manipulation In 18 Minutes"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-8">
        <span className="font-bold mb-4 px-8">Comments:</span>
        <CommentList commentsData={commentsWithCount} />
      </div>
    </div>
  );
};

export default WatchPage;

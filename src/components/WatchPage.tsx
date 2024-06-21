import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CommentList, { addReplyCount } from "./CommentList";
import { COMMENTS_DATA } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateMessage } from "../utils/helper";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [queryParams] = useSearchParams();

  const commentsWithCount = addReplyCount(COMMENTS_DATA);
  const chatMessages = useSelector((store: RootState) => store.chat.messages);
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  console.log("chatMessages", chatMessages);

  //API POLLING
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateMessage(10),
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  });

  const submitLiveMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Shreya Varma",
        message: liveMessage,
      })
    );

    setLiveMessage("");
  };

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

        <div className="flex flex-col">
          <div className="ml-3 border-black overflow-y-scroll h-[365px] flex flex-col-reverse">
            {chatMessages.map((message, index) => {
              return <LiveChat key={index} message={message} />;
            })}
          </div>

          <form
            className="flex justify-between mt-2"
            onSubmit={(e) => submitLiveMessage(e)}
          >
            <input
              className="border border-black p-2 ml-3"
              type="text"
              placeholder="Type here..."
              value={liveMessage}
              onChange={(e) => setLiveMessage(e.target.value)}
            />
            <button className="bg-green-300 p-2 rounded-md">Send</button>
          </form>
        </div>
      </div>

      <div className="mt-8">
        <span className="font-bold mb-4 px-8">Comments:</span>
        <CommentList commentsData={commentsWithCount} />
      </div>
    </div>
  );
};

export default WatchPage;

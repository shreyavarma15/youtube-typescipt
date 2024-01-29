import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState<any[]>([]);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const json = await response.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap ml-2">
      {videos.map((video) => (
        // <Link to={"/watch?v=" + video.id} key={video.id}>
        <VideoCard key={video.id} video={video} />
        // </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

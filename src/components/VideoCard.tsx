type VideoCardProps = {
  video: {
    snippet: {
      channelTitle: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
      publishedAt: string;
    };
    statistics: {
      viewCount: number;
    };
  };
};

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, thumbnails, publishedAt } = snippet;

  return (
    <div className="p-2 my-2 shadow-lg cursor-pointer">
      <img
        className="h-48 rounded-2xl "
        alt="video"
        src={thumbnails.high.url}
      />
      <div className="flex flex-wrap">{channelTitle}</div>
      <div>{statistics.viewCount} Views</div>
      <span>{publishedAt}</span>
    </div>
  );
};

export default VideoCard;

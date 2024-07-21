import { Card } from "antd";
import Iframe from "react-iframe";

const VideoCard = ({ videos }) => {
  return (
    videos.length > 0 && (
      <Card title="Videos">
        {videos.map((video) => {
          return (
            <div>
              <Iframe
                url={`https://www.youtube.com/embed/${video}?autoplay=1`}
                width="100%"
                id=""
                className=""
                display="block"
                position="relative"
              />
            </div>
          );
        })}
      </Card>
    )
  );
};

export default VideoCard;

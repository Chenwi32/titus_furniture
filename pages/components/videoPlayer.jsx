import { Container } from "@chakra-ui/react";
import { CloudinaryContext, Video } from "cloudinary-react";
import { useRef } from "react";

const VideoPlayer = () => {
    const videoRef = useRef();
    return (
      <Container maxH={"80vh"}>
        <CloudinaryContext cloud_name="codedog">
          <div>
            <Video
              publicId="https://res.cloudinary.com/dphx0rfui/video/upload/v1668109814/VID-20221031-WA0052_xw2ytj.mp4"
              controls
              innerRef={videoRef}
            />
          </div>
        </CloudinaryContext>
      </Container>
    );
}

export default VideoPlayer;
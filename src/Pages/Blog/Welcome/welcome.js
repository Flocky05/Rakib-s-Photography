import React from "react";
import video from "../../../images/video/Welcome.mp4";

const Welcome = () => {
  return (
    <div>
      <video autoPlay muted loop className="w-full">
        <source src={video} />
      </video>
    </div>
  );
};

export default Welcome;

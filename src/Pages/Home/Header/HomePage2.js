import React from "react";
import video from "../../../asests/video/dron.mp4";

const HomePage2 = () => {
  return (
    <div className=" my-8 py-4 hero">
      <video autoPlay loop muted playsInline className="w-full">
        <source src={video} />
      </video>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Let's start your jouonrny with Rakib's Photography.We are always
            with yo to capture your beautiful moments more and more
            beauutifully.Everything you can imagine is real.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;

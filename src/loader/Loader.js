import React from "react";
import Lottie from "react-lottie";
import loading from "./loader.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="loader">
      <Lottie options={defaultOptions} width={60} height={60} />
    </div>
  );
};

export default Loader;

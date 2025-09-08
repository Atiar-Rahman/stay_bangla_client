import Lottie from "lottie-react";
import animationData from "../data/loaing-animation.json";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Loading;

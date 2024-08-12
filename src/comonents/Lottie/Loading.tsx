import Lottie from "lottie-react";
import { loading } from "../..";


const Loading = () => {
    return (
        <Lottie
        loop
        animationData={loading}
        play
        style={{ width: 50, height: 50 }}
      />
    );
};

export default Loading;
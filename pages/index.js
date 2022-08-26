import Meta from "../components/Meta";
import Slider from "../components/Slider/Slider";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.firebaseState.user);
  console.log(user);

  return (
    <div className="container">
      <Meta title="Akash" desp="kjssjb" keywords="Profiler,protfilo" />
      <div>
        <Slider></Slider>
      </div>
    </div>
  );
}

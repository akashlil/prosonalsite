// import { useSelector, useDispatch, useStore } from "react-redux";
// import { counterActions } from "../store/counterSlice";
import Meta from "../components/Meta";
import Slider from "../components/Slider/Slider";

export default function Home() {
  // firebaseInit();
  // const counter = useSelector((state) => state.counterstate.count);
  // const email = useSelector((state) => state.counterstate.email);

  // const dispatch = useDispatch();

  // const increment = () => {
  //   dispatch(counterActions.increment());
  // };

  // const descrement = () => {
  //   dispatch(counterActions.decrement());
  // };

  return (
    <div>
      <Meta title="Akash" desp="kjssjb" keywords="Profiler,protfilo" />
      <div>
        <Slider></Slider>
      </div>
    </div>
  );
}

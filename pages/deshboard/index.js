import { useSelector } from "react-redux";
import LoadData from "../../components/LoadData/LoadData";

const Deshboard = () => {
  // const user = useSelector((state) => state.firebaseState.user);
  // console.log(user);

  const pamison = [2];
  return (
    <div className="container">
      <LoadData pamison={pamison} />
      {/* <div className={loadStyle.mainitem}>
        <div className={loadStyle.animatedbackground}>
          <div
            className={[
              loadStyle.backgroundmasker,
              loadStyle.btndivideleft,
            ].join(" ")}
          ></div>
        </div>
      </div> */}
    </div>
  );
};

export default Deshboard;

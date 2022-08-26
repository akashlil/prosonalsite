import loadStyle from "./loaddata.module.css";
import React from "react";
const LoadDatass = ({ pamison }) => {
  const [a] = pamison;
  console.log(a);
  return (
    <div className={loadStyle.mainitem}>
      {a == 1 ? (
        <div className={loadStyle.animatedbackground}>
          {/* <div
            className={[
              loadStyle.backgroundmasker,
              loadStyle.btndivideleft,
            ].join(" ")}
          ></div> */}
        </div>
      ) : (
        ""
      )}

      {a == 2 ? (
        <div className={loadStyle.shareddom}>
          <div
            className={[loadStyle.subrect, loadStyle.purebackground].join(" ")}
          ></div>
        </div>
      ) : (
        ""
      )}
      {a == 3 ? <div className={loadStyle.cssdom}></div> : ""}
    </div>
  );
};

export default LoadDatass;

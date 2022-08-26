import loadStyle from "./loaddata.module.css";
import React from "react";

const LoadData = ({ pamison }) => {
  const [a] = pamison;
  console.log(a);
  return (
    <div className={loadStyle.mainitem}>
      {a == 1 ? (
        <div className={loadStyle.animatedbackground}>
          <div
            className={[
              loadStyle.backgroundmasker,
              loadStyle.btndivideleft,
            ].join(" ")}
          ></div>
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
      {a == 4 ? (
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="">Data Loading...</span>
          </button>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Data Loading...
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoadData;

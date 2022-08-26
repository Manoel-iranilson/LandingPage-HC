import React from "react";
// import jayz from "../../assets/Jayz.png";
import zzz from "../../assets/zzz.png";
import {
  BsFillPatchCheckFill,
  BsFillSuitHeartFill,
  BsFillChatFill,
} from "react-icons/bs";

function ToStart() {
  return (
    <div
      className="text-white"
      style={{ backgroundColor: "#000", marginTop: 100 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 " style={{ marginTop: 200 }}>
            <h2>PARA STARTUPS</h2>
            <p style={{ textAlign: "justify", marginTop: 30 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div style={{ marginLeft: 100 }} className="mt-5">
              <img className="img-fluid" src={zzz} />
            </div>
          </div>
          <div className="col-md-3" style={{ marginTop: 150 }}>
            {/* <img className="img-fluid" src={jayz} /> */}
          </div>
          <div className="col-md-5 " style={{ marginTop: 200 }}>
            <div style={{ marginLeft: 150 }}>
              <BsFillPatchCheckFill size={40} className="me-3" />
              <BsFillSuitHeartFill size={40} className="me-3" />
              <BsFillChatFill size={40} />
            </div>
            <div style={{ marginTop: 100 }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud.
              </p>
              <button
                type="button"
                className="btn btn-lg text-dark w-50 mt-5 m-2"
                style={{ backgroundColor: "#fff" }}
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToStart;

import React from "react";
import kutcher from "../../assets/kutcher.png";
import Mulher from "../../assets/mulheres.png";
import Reynolds from "../../assets/Reynolds.png";
import Line from "../../assets/LineHori.png";
import { BsFillPatchCheckFill, BsArrowRight } from "react-icons/bs";
function Invest() {
  return (
    <div className="row w-100 ">
      <div className="col-3 mt-5">
        <img src={kutcher} />
        <div className="ms-5">
          <img src={Reynolds} />
        </div>
      </div>
      <div className="col-3 ms-4">
        <img src={Mulher} />
      </div>
      <div className="col-3" style={{ marginTop: 100 }}>
        <BsFillPatchCheckFill size={35} className="mb-3" />
        <h2>INVEST LIKE A STAR</h2>
        <img src={Line} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="shadow p-3 mb-5 bg-body rounded mt-5">
          <b>
            {" "}
            Agende uma entrevista <BsArrowRight />
          </b>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default Invest;

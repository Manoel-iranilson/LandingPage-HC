import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Beyonce from "../../assets/Beyonce.png";
import DiCaprio from "../../assets/DiCaprio.png";

const BuzzNews = () => {
  return (
    <div className="container mt-5">
      <h1>BUZZZZZZZ NEWS</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={Beyonce} />
          <div className="fs-5 mt-3">
            Beyoncé lidera rodada de US$ 31 milhões em empresa de água
            saborizada
          </div>
          <div className="mt-3">
            A <b>Lemon Perfect</b>, marca de água saborizada, recebeu um aporte
            no valor de <b>US$ 31 milhões</b> em rodada Série A, liderado pela
            artista e empresária premiada internacionalmente.
          </div>
          <div className="shadow p-3 w-50  rounded">
            <b>
              Leia Mais <BsArrowRight />
            </b>
          </div>
        </div>
        <div className="col-md-6">
          <img src={DiCaprio} />
          <div className="fs-5 mt-3">
            DiCaprio é novo sócio de Lewis Hamilton em império de hambúrguer
            vegano
          </div>
          <div className="mt-3">
            A marca de alimentos à base de plantas <b>Neat Food</b>, anunciou o
            início de um contrato de <b>US$ 30 milhões</b> de fundos da Série B
            para impulsionar seu crescimento.
          </div>
          <div className="shadow p-3 w-50  rounded">
            <b>
              Leia Mais <BsArrowRight />
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuzzNews;

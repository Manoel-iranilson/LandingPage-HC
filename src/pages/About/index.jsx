import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Rock from "../../assets/theRock.png";

function About() {
  return (
    <div className="container mt-5">
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <div className="col-md-10">
            <h3 className="featurette-heading fw-normal lh-1">
              Somos um clube de investimento exclusivo focado em{" "}
              <b>media for equity</b>
            </h3>
            <div className="row">
              <div className="col-10 g-2 mt-3">
                <div className="shadow-sm p-2 m-1 bg-body rounded">
                  <span>
                    Por que?
                    <br />
                  </span>
                  <span className="mb-1">
                    Acreditamos que a atenção que você atrai e influência que
                    gera são <b>ativos exponenciais</b>
                  </span>
                </div>

                <div className="shadow-sm p-2 m-1 bg-body rounded">
                  <span>
                    Como?
                    <br />
                  </span>
                  <span className="mb-1">
                    Possibilitamos que multiplique esse ativo investindo em{" "}
                    <b>startups de alto crecimento.</b>
                  </span>
                </div>

                <div className="shadow-sm p-2 m-1 bg-body rounded">
                  <span className="mb-1">
                    O que? <br />
                  </span>
                  <span>
                    Potencialize sua receita como autoridade qnquanto pode fica
                    investindo em <b>media for equity</b>
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-lg text-light w-50 mt-5 m-2"
                  style={{ backgroundColor: "#000" }}
                >
                  Seja investidor
                </button>
              </div>
              <div className="col-2 text-center">---</div>
            </div>
          </div>
        </div>
        <div className="col-md-5 order-md-1">
          <h1 className="text-end mx-5">ABOUT US</h1>

          <div className="text-end mx-5">
            <FiArrowUpRight size={50} />
          </div>
          <div>
            <img className="img-fluid" src={Rock} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

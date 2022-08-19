import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/Logo.png";
import { BsFillSuitHeartFill } from "react-icons/bs";

function Home() {
  return (
    <Container>
      <div className="container">
        <img src={Logo} className="mt-4 mb-5" />
        {/* Parte central */}
        <div>
          <div className="row align-items-center ">
            <div>
              <div className="text-center text-lg-start">
                <h2 className="display-3 lh-5  w-100 text-white">
                  <b>MEDIA FOR EQUITY</b>
                </h2>
                <h2 className="display-4 lh-5 mb-5 w-100 text-white">
                  Invest like a <b>Willians</b>.
                </h2>
              </div>
            </div>
          </div>
          {/* Button */}
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button
            type="button"
            className="btn btn-light btn-lg px-3 py-3 text-dark "
          >
            Seja um Investidor
          </button>
          <button
            type="button"
            className="btn btn-outline-light btn-lg px-5 mx-2"
          >
            Para Startups{" "}
          </button>
        </div>

        <div className="text-white mt-5" style={{ display: "flex" }}>
          <BsFillSuitHeartFill size={35} />
          <p style={{ marginLeft: 20, width: 349 }}>
            Serena williams, uma das maiores tenista de todos os tempos; já
            investiu em <b>60 startups</b> sendo que{" "}
            <b>13 viraram unicórnios</b>. Acabou de criar um fundo de{" "}
            <b>US$ 111 milhões</b>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Home;

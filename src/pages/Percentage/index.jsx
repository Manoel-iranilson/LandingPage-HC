import React from "react";
import Line from "../../assets/Line.png";
import { Data } from "../../mock";

function Percentage() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <div className="container">
        <h2 className="text-white ">
          Volume de investimento <br /> por estagio
        </h2>
        <h4 className="text-white mb-5"> Aplicados em stratups no Brasil</h4>
        <div className="row">
          <div className="col-md-6" style={{ display: "flex" }}>
            <div className="text-white " style={{ width: 650 }}>
              Quando destrinchamos os investimentos do ano por estágio,
              entendeoms melhor como estes se dividem pelo ecossistema.
              <br />
              <br />O investimento eraly stage, que compreende anjo, pré-seed e
              seed, recebe a menor fatia do bolo, em parte por se tratar de
              rodadas menores, mas também porque é uma faixa de investimento
              considerada de alto risco, visto que essas empresas ainda não
              possuem reconhecimento no mercado.
            </div>
            <img src={Line} style={{ margin: 20 }} />
            <div className="text-white " style={{ width: 700 }}>
              Os chamados late stages, referentes às séries A em diante,
              concetraram a maior parte de todo o investimento venture capital
              no país.
              <br />
              <br />
              Esses rounds atraem mais investidores por ser tratarem de empresas
              maiores, mais consolidadas e por haver mais possbilidades de saída
              do deal.
              <br />
              <br />
              Destaque para a enorme quantia na série G, referente a uma única
              empresa: o Nubank
            </div>
          </div>
          {/* Progresso barra */}
          <div className="col-md-6">
            {Data.map((e) => (
              <div style={{ display: "flex" }} className="text-white mb-1">
                <p style={{ width: 150 }}>{e.label}</p>
                <div
                  style={{ backgroundColor: "#fff", width: e?.w }}
                  className="text-white mb-1 mx-2 rounded-1"
                />
                <p>{e.money.toFixed(1)} M</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Percentage;

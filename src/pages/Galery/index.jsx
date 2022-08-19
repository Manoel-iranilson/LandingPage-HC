import React from "react";
import { Container, DivImage } from "./styles";
import galery from "../../assets/galery.png";
import empresaList from "../../assets/empresaList.png";

function Galery() {
  return (
    <Container>
      <div>
        <img className="img-fluid" src={galery} />
      </div>
      <DivImage>
        <img className="img-fluid" src={empresaList} />
      </DivImage>
    </Container>
  );
}

export default Galery;

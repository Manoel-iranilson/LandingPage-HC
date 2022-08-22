import React from "react";
import Logo from "../../assets/FooterLogo.png";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";

function Footer() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <div className="container text-white">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Buzzzzzzz</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Quem somos
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Nosso mercado
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Contato
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    seja Buzzzzzzz
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Investidores</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Tese do investidor
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Seja investidor
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Nossos investimentos
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Startups</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Tese de investimento
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Faça aplicação
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Termo de investimento
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Termo de follow on
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 text-end">
              <img className="img-fluid" src={Logo} />
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>Buzzzzzzz® - Todos os direitos reservados</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <FaLinkedinIn size={20} color={"#fff"} />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <FaInstagram size={20} color={"#fff"} />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <FaTwitter size={20} color={"#fff"} />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <FaTelegramPlane size={20} color={"#fff"} />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <MdMarkEmailUnread size={20} color={"#fff"} />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <BsFillBookmarkFill size={20} color={"#fff"} />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

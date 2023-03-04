import { useState, useEffect, useRef } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import { motion } from "framer-motion";

import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/7.png";

const images = [img1, img2, img3, img4, img5, img6];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showPedidosModal, setShowPedidosModal] = useState(false);
  const [showPromocoesModal, setShowPromocoesModal] = useState(false);
  const [showSobreModal, setShowSobreModal] = useState(false);
  const [showContatoModal, setShowContatoModal] = useState(false);

  const [activeImage, setActiveImage] = useState(null);
  function handleImageClick(index) {
    setActiveImage(index);
  }
  const carrousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(carrousel.current?.scrollWidth, carrousel.current?.offsetWidth);
    setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth);
  });

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo da Pepperone's" />
      </header>
      <main>
        <div className="container">
          <div className="colum">
            <h1>Pepperone'S</h1>

            <a
              href="#cardapio"
              className="menu-links"
              id="cardapio"
              onClick={() => setShowModal(true)}
            >
              <i className="fa-solid fa-pizza-slice"></i> Cardápio
            </a>

            <a
              href="#pedidos"
              className="menu-links"
              id="pedidos"
              onClick={() => setShowPedidosModal(true)}
            >
              <i className="fas fa-shopping-cart"></i> Pedidos
            </a>

            <a
              href="#promocoes"
              className="menu-links"
              id="promocoes"
              onClick={() => setShowPromocoesModal(true)}
            >
              <i className="fas fa-tags"></i> Promoções
            </a>

            <a
              href="#sobre"
              className="menu-links"
              id="sobre"
              onClick={() => setShowSobreModal(true)}
            >
              {" "}
              <i className="fa-solid fa-user"></i>Sobre Nós
            </a>

            <a
              href="#contato"
              className="menu-links"
              id="contato"
              onClick={() => setShowContatoModal(true)}
            >
              {" "}
              <i className="fa-solid fa-phone"></i>Contato
            </a>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="modal">
          <div className="modal-main">
            <h2>Cardápio</h2>

            <motion.div
              ref={carrousel}
              className="carrousel"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {images.map((image) => (
                  <motion.div className="item" key={image}>
                    <img src={image} alt="Imgs pizza"></img>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      {showPedidosModal && (
        <div className="modal">
          <div className="modal-main">
            <h2>Pedidos</h2>

            <button
              className="close-button"
              onClick={() => setShowPedidosModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      {showPromocoesModal && (
        <div className="modal">
          <div className="modal-main">
            <h2>Promoões</h2>

            <button
              className="close-button"
              onClick={() => setShowPromocoesModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      {showSobreModal && (
        <div className="modal">
          <div className="modal-main">
            <h2>Sobre</h2>
            <button
              className="close-button"
              onClick={() => setShowSobreModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      {showContatoModal && (
        <div className="modal">
          <div className="modal-main">
            <h2>Contato</h2>

            <button
              className="close-button"
              onClick={() => setShowContatoModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <footer>
        <a href="#">Política de privacidade</a> | &copy; 2021 Pepperone's
      </footer>
    </div>
  );
}

export default App;

import React, { useRef, useState } from "react";

import "./App.css";
import title from "./assets/Assets desktop/Titulo.png";
import family from "./assets/Assets desktop/familia.png";
import marco from "./assets/Assets desktop/marco.png";
//comida
import gameImage1 from "./assets/Assets desktop/Pierna-horneada-2.png";
import gameImage2 from "./assets/Assets desktop/gallina-rellena-2.png";
import gameImage3 from "./assets/Assets desktop/jamon-tipo-canadiense.png";
import r1 from "./assets/Assets desktop/r1.png";
import r2 from "./assets/Assets desktop/r2.png";
import r3 from "./assets/Assets desktop/r3.png";
//iconos
import left from "./assets/Assets desktop/Flecha-izq.png";
import right from "./assets/Assets desktop/Flecha-der.png";
import telIcon from "./assets/Assets desktop/Telefono.png";
//logos
import fb from "./assets/Assets desktop/Facebook-icono.png";
import ig from "./assets/Assets desktop/Instagram-icono.png";
import yt from "./assets/Assets desktop/Youtube-icono.png";
import wts from "./assets/Assets desktop/Whats-icono.png";

function App() {
  const [detectado, setDetectado] = useState(false);
  const [isDropping, setDropping] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const refG = useRef(null);
  const refP = useRef(null);
  const refJ = useRef(null);

  const changeClassName = (ref) => {
    if (detectado) {
      ref.current.className = "detectado";
    } else {
      ref.current.className = "imgContainer";
    }
  };

  const dragEnd = (e, ref) => {
    e.preventDefault();
    console.log("drag terminado");
    setDropping(false);
  };
  const handlerDrag = (e) => {};

  const dropEvent = (e, ref, producto,validate) => {
    e.preventDefault();

    //validar ref
    console.log("validate: ", validate.current.alt);
    console.log("pro:", producto);
    if (isDropping) {
      setDetectado(false);
    } else {
      setDetectado(true);
    }
    if (isValid(validate, producto)) {
      changeClassName(ref);
    }
  };

  const isValid = (validate, producto) => {
    if (validate.current.alt === producto) {
      return true;
    } else {
      return false;
    }
  };

  const allowDrop = (e, ref) => {
    e.preventDefault();
    setDropping(true);
    console.log(ref); //cambiar clase css a detectar
    setDetectado(true);
  };

  return (
    <div className="App">
      <main>
        <section className="hero">
          <div className="hero-top">
            <img src={title} alt="toledo" id="title" />
            <img src={family} alt="familia" id="family" />
          </div>
          <h3>DESCUBRE LA RECETA</h3>
        </section>
        <section className="game-section">
          <div className="fondo">
            <img src={marco} alt="" className="marco" />
            <div className="game">
              <h3>JUEGA Y DESCUBRE EL SECRETO de las FIESTAS</h3>
              <div className="game-info">
                <p>
                  <b>
                    Mueve los productos toledo hacia la silueta que corresponde,
                    participa y gana un KIT NAVIDEÑO TOLEDO
                  </b>
                </p>
              </div>
              <div className="game-container">
                <img
                  ref={refG}
                  src={gameImage2}
                  alt="gallina"
                  onDragStart={(e) => handlerDrag(e)}
                  onDragEnd={(e, ref2) => {
                    dragEnd(e, ref2);
                  }}
                  draggable="true"
                />
                <img
                  ref={refJ}
                  src={gameImage3}
                  alt="jamon"
                  onDragStart={(e) => handlerDrag(e)}
                  onDragEnd={(e, ref3) => {
                    dragEnd(e, ref3);
                  }}
                  draggable="true"
                />
                <img
                  ref={refP}
                  src={gameImage1}
                  alt="pierna"
                  onDragStart={(e) => handlerDrag(e)}
                  onDragEnd={(e, ref1) => {
                    dragEnd(e, ref1);
                  }}
                  draggable="true"
                />
              </div>
              <div className="siluetas">
                <div
                  className="imgContainer"
                  onDrop={(e) => dropEvent(e, ref1, "pierna", refP)}
                  onDragOver={(e) => allowDrop(e, ref1)}
                  ref={ref1}
                  alt="pierna"
                >
                  <img src={gameImage1} />
                </div>
                <div
                  className="imgContainer"
                  onDrop={(e) => dropEvent(e, ref2, "gallina", refG)}
                  onDragOver={(e) => allowDrop(e, ref2)}
                  ref={ref2}
                  alt="gallina"
                >
                  <img src={gameImage2} />
                </div>

                <div
                  className="imgContainer"
                  onDrop={(e) => dropEvent(e, ref3, "jamon", refJ)}
                  onDragOver={(e) => allowDrop(e, ref3)}
                  ref={ref3}
                  alt="jamon"
                >
                  <img src={gameImage3} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recetas">
          <h3>RECETAS</h3>
          <div className="lista-recetas">
            <div className="receta">
              <button className="ver">VER RECETA</button>
              <img src={r1} alt="receta 1" />
              <p>Pavo Relleno</p>
            </div>
            <div className="receta">
              <button className="ver">VER RECETA</button>
              <img src={r2} alt="receta 2" />
              <p>Gallina Rellena</p>
            </div>
            <div className="receta">
              <button className="ver">VER RECETA</button>
              <img src={r3} alt="receta 3" />
              <p>Pierna Horneada</p>
            </div>
          </div>
        </section>

        <section className="productos">
          <div className="subtitle">
            <h3>PRODUCTOS</h3>
            <p>Listo para para calentar y servir</p>
          </div>
          <div className="carousel">
            <img src={left} alt="left" id="fl" />
            <div className="producto">
              <img src={r1} alt="rb1" />
              <p>PAVO HORNEADO</p>
            </div>
            <div className="producto">
              <img src={r2} alt="r2" />
              <p>GALLINA RELLENA</p>
            </div>
            <div className="producto">
              <img src={gameImage3} alt="jamon canadiense" />
              <p>JAMÓN CANADIENSE</p>
            </div>
            <img src={right} alt="right" id="fr" />
          </div>
        </section>
        <footer>
          <div className="entrega">
            <div className="numero">
              <img src={telIcon} alt="icono de telefono" />
              <div>
                <h4>Te lo llevamos a casa</h4>
                <p>3760-3030</p>
              </div>
            </div>
          </div>
          <div className="horario">
            <h4>7:00 am - 4:00 pm</h4>
            <p>horario de entrega</p>
          </div>

          <div className="reconocimiento">
            <h5>Galardón Nacional a la Exportación</h5>
            <h5>Lovermarks Centroamérica</h5>
          </div>

          <div className="redes">
            <div className="logos">
              <img src={fb} alt="facebook" />
              <img src={ig} alt="instagram" />
              <img src={yt} alt="youtube" />
              <img src={wts} alt="whatsapp" />
            </div>
            <p>© 2021 Toledo | Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

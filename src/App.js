import "./App.css";
import title from "./assets/Assets desktop/Titulo.png";
import family from "./assets/Assets desktop/familia.png";
import marco from "./assets/Assets desktop/marco.png";
import gameImage1 from "./assets/Assets desktop/Pierna-horneada-2.png";
import gameImage2 from "./assets/Assets desktop/gallina-rellena-2.png";
import gameImage3 from "./assets/Assets desktop/jamon-tipo-canadiense.png";
import r1 from "./assets/Assets desktop/r1.png";
import r2 from "./assets/Assets desktop/r2.png";
import r3 from "./assets/Assets desktop/r3.png";
import ver from "./assets/Assets desktop/Ver-receta.png";

function App() {
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
                <img src={gameImage2} alt="gallinarellena" />
                <img src={gameImage3} alt="jamon canadiense" />
                <img src={gameImage1} alt="Pierna horneada" />
              </div>
              <div className="siluetas">
                <div className="imgContainer">
                  <img src={gameImage1} alt="Pierna horneada" />
                </div>
                <div className="imgContainer">
                  <img src={gameImage2} alt="gallinarellena" />
                </div>
                <div className="imgContainer">
                  <img src={gameImage3} alt="jamon canadiense" />
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
        <h3>PRODUCTOS</h3>
        <p>Listo para para calentar y servir</p>
      </section>

      </main>
    </div>
  );
}

export default App;

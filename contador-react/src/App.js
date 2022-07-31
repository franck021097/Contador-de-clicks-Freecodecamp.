import "./App.css";
import freecodeCampLogo from "./imagenes/freecodeCampLogo.png";
import Boton from "./componentes/boton.jsx";
import Contador from "./componentes/contador";
import { useState } from 'react';


function App() {
  
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodeCampLogo}
          alt="logo de freecodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        
        <Contador s={numClics} />
        
        <Boton 
         texto="click"
         esBotonDeClic={true}
         manejarClic={manejarClic} 
         />

        <Boton
          texto="reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;

import "./App.css";
import freecodeCampLogo from "./imagenes/freecodeCampLogo.png";
import Boton from "./componentes/boton.jsx";
import Contador from "./componentes/contador";
import React from 'react';


class App extends React.Component{

  constructor() {
    super();
    this.state={
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);

  }
  
  manejarClic(){
    this.setState(({numClics}) => ({numClics: numClics + 1}));
  }

  reiniciarContador(){
    this.setState(({numClics: 0}));
  }
  

  render(){
    
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
          
          <Contador s={this.state.numClics} />
          
          <Boton 
           texto="click"
           esBotonDeClic={true}
           manejarClic={this.manejarClic} 
           />
    
          <Boton
            texto="reiniciar"
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador}
          />
    
        </div>
      </div>
    );
  }
}

export default App;

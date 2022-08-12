import React from "react";
import "../hojas-de-estilos/contador.css";

class Contador extends React.Component{
  render(){
    return <div className="contador">{this.props.s}</div>;
  }
}

export default Contador;

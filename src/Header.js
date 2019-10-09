import React, { Component } from 'react';
import './Header.css';





export default class Header extends Component {

  
  render() {

    return (
      <header> 
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">

   
        <div  className="titulo">BIENVENIDO AL JUEGO DE MEMORIA !! </div>
          <div>
            <button className="botton" onClick={this.props.resetearPartida}>
              Reiniciar
            </button>

        </div>
        </nav>
        
      </header>
    );
  }
};

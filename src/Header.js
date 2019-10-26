import React, { Component } from 'react';
import './Header.css';




export default class Header extends Component {
  constructor(){
    super();
    this.state={
      Pareja: ''
    };
  }
  
  render() {
    const { Pareja } = this.state;
    return (
      <header> 
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">

   
        <div  className="titulo">BIENVENIDO AL JUEGO DE MEMORIA !! </div>
          <div>
            <button className="botton" onClick={this.props.resetearPartida}>
              Reiniciar
            </button>
            
        </div>
        
        <div>
        <input className="input-cont" value={this.state.Pareja} type="text" onChange={this.onChange}  placeholder="Ingrese numero de cartas"     />
        
             
        </div>
        </nav>
        
      </header>
    );
  }
};

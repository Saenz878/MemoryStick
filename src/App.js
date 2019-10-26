import React, { Component } from 'react';
import Header from './Header';
import Tablero from './Tablero';
import './App.css';
import construirBaraja from './utils/construirBaraja';

const getEstadoInicial = () => {
  
  const baraja = construirBaraja();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false
  
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial();
  }

  render() {
    return (
      <div className="App">
        <Header 
          resetearPartida={() => this.resetearPartida()}
          
        />
        <Tablero 
          baraja={this.state.baraja}
          parejaSeleccionada={this.state.parejaSeleccionada}
          seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
      </div>
    );
  }

  seleccionarCarta(carta) {
    if (
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinida
    ) {
      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    });

    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }

  compararPareja(parejaSeleccionada) {
    this.setState({estaComparando: true});

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;

      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }

          return {...carta, fueAdivinada: true};
        });
      }

      this.verificarSiHayGanador(baraja);
      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false
       
      })
    }, 1000)
  }

  verificarSiHayGanador(baraja) {
  // baraja.forEach ((carta)=> carta.fueAdivinada = true );
    if (
      baraja.filter((carta) => !carta.fueAdivinada).length === 0
    ) {
      alert(`GANASTES MUY BUENA MEMORIA EXCELENTE!`);
    }
  }

  resetearPartida() {
    this.setState(
      getEstadoInicial()
    );
  }

 
 
 
}

export default App;

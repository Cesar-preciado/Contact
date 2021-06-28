//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      numero : 0 
    };
    this.Incrementar = this.Incrementar.bind(this);
  }

  
  Incrementar(){

    this.setState = ({
      numero: this.state.numero + 1
    })

  }


  render() {
    return(
      <div className="App">
        <p>numero : {this.state.numero}</p>
        <button onClick={this.Incrementar}>Incrementar</button>
      </div>
    );
}
  
}

export default App;

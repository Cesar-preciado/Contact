//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {



  render(){ 
    
    const productos = [
      {codigo:1, Producto: "Teclado de escritorio", Descripcion: "Teclado de color negro", Precio: 25.000},
      {codigo:2, Producto: "Marcador pelikan", Descripcion: "Marcador pelikan de color negro", Precio: 2000}
    ]

    const Productos = productos.map((products) => 
    <tr>
      <td>{products.codigo}</td>
      <td>{products.Producto}</td>
      <td>{products.Descripcion}</td>
      <td>{products.Precio}</td>
    </tr>

  
    
  )
    
    return(
      <div className="App">
        <table border="1">
           <tr>
              <td>Codigo</td>
              <td>Producto</td>
              <td>Descripcion</td>
              <td>Precio</td>
           </tr>
             {Productos}
        </table>
      </div>
    )
  }

}

export default App;

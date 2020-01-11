import React, { Component } from 'react';
import './App.css';
import ProductoComponent from './components/ProductoComponent';


class App extends Component {

  componentDidMount() {
    this.listarProductos();
  }

  listarProductos = () => {
    fetch('http://localhost:8082/api/producto')
      .then(res => res.json())
      .then((data) => {
        this.setState({ listaProducto: data })
      })
      .catch(console.log);
  }

  state = {
    listaProducto: []
  }

  render() {
    return (

      this.state.listaProducto.map((producto) => (
        <ProductoComponent nombreProducto={producto.nomprod} precioProducto={producto.preprod} />
      ))

    );
  }
}


export default App;

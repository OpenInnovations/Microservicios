import React, { Component } from 'react';
import './App.css';
import ProductosComponent from './components/ProductoComponent';
import CategoriaComponent from './components/CategoriaComponent';


class App extends Component {

  componentDidMount() {
  }


  render() {
    return (
      <div>
        <CategoriaComponent />
        <ProductosComponent />
      </div>
    );
  }
}


export default App;

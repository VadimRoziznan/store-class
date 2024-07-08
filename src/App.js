import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductInfo } from './components/ProductInfo/ProductInfo';
import styles from './components/ProductInfo/productInfo.module.css'

class App extends Component {
  item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  };

  render() {
    return (
      <div className={styles["container"]}>
      <div className={styles["background-element"]}>
      </div>
      <div className={styles["highlight-window"]}>
        <div className={styles["highlight-overlay"]}></div>
      </div>
      <div className={styles["window"]}>
      <ProductInfo product={this.item} />
      </div>
    </div>   
    );
  }
}

export default App;

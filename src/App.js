import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductInfo } from './components/ProductInfo/ProductInfo';
import styles from './components/ProductInfo/productInfo.module.css'

class App extends Component {
  render() {
    return (
      <div className={styles["container"]}>
      <div className={styles["background-element"]}>
      </div>
      <div className={styles["highlight-window"]}>
        <div className={styles["highlight-overlay"]}></div>
      </div>
      <div className={styles["window"]}>
      <ProductInfo />
      </div>
    </div>   
    );
  }
}

export default App;

import React from 'react'
import { Component } from 'react';
import styles from './productInfo.module.css';


export class ProductInfo extends Component {
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
      <article>
      <div className={styles["main-content"]}>
      <h2>{this.item.brand}</h2>
      <h1>{this.item.title}</h1>
      <h3>{this.item.description}</h3>
      <div className={styles["description"]}>{this.item.descriptionFull}</div>
      <div className={styles["highlight-window mobile"]}>
        <div className={styles["highlight-overlay"]}></div>
      </div>
      <div className={styles["divider"]}></div>
      <div className={styles["purchase-info"]}>
        <div className={styles["price"]}>{this.item.currency}{this.item.price}</div>
        <button>Добавить в корзину</button>
      </div>
      </div>
    </article>
    );
  }
}

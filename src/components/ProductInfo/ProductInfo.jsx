import React from 'react'
import { Component } from 'react';
import styles from './productInfo.module.css';


export class ProductInfo extends Component {
  render() {
    const { product } = this.props;
    return (
      <article>
      <div className={styles["main-content"]}>
      <h2>{product.brand}</h2>
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
      <div className={styles["description"]}>{product.descriptionFull}</div>
      <div className={styles["highlight-window mobile"]}>
        <div className={styles["highlight-overlay"]}></div>
      </div>
      <div className={styles["divider"]}></div>
      <div className={styles["purchase-info"]}>
        <div className={styles["price"]}>{product.currency}{product.price}</div>
        <button>Добавить в корзину</button>
      </div>
      </div>
    </article>
    );
  }
}

import React from 'react'
import Ingredients from './Ingredients'
import styles  from '../Styles/Burger.css'

const burger = (props) => {
  return(
    <div className={styles.burger}>
      <Ingredients type="bread-top" />
      <Ingredients type="lettuce" />
      <Ingredients type="bacon" />
      <Ingredients type="cheese" />
      <Ingredients type="meat" />
      <Ingredients type="bread-bottom" />
    </div>

  );
}

export default burger

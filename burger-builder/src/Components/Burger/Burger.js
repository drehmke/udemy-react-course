import React from 'react'
import Ingredients from './Ingredients'
import styles  from '../Styles/Burger.css'

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])]
        .map((_, i) => {
          return <Ingredients key={igKey + i} type={igKey} />
        })
    })

  return(
    <div className={styles.burger}>
      <Ingredients type="bread-top" />
      {transformedIngredients}
      <Ingredients type="bread-bottom" />
    </div>

  );
}

export default burger

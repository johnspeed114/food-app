import { useContext } from 'react';
import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
//Need this below if the context is a component
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  //Requirement
  //1. Incorporate a new context with the cart provider
  //2. Find what is the issue with cart contextnot working
  //3. start changing the amount of cart context with addtoCartHandler
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.content}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

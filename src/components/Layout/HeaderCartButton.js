import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon.js';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numCartItems = cartCtx.items.reduce((a, b) => {
    return a + b.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        {/* instead of using usestate to turn on and off modals use react portal */}
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

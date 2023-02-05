import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon.js';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numCartItems = cartCtx.items.reduce((a, b) => {
    return a + b.amount;
  }, 0);

  const { items } = cartCtx;
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length > 0) {
      setBtnIsHighlighted(true);
    }

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    //its good practice to do a clean of all the values in a use effect
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
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

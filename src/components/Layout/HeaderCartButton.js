import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon.js';

const HeaderCartButton = (props) => {
  const cartIconHandle = () => {
    props.setCartModal(!props.cartModal);
  };

  return (
    <button className={classes.button}>
      <span className={classes.icon} onClick={cartIconHandle}>
        {/* instead of using usestate to turn on and off modals use react portal */}
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;

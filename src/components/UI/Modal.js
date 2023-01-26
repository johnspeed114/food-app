import React from 'react';
import Cart from '../Cart/Cart';
import classes from './Modal.module.css';

const Modal = (props) => {
  const closeHandle = () => {
    props.setCartModal(false);
  };
  return (
    <div className={classes.backdrop} onClick={closeHandle}>
      <div className={classes.modal}>
        <Cart key='1111' />
      </div>
    </div>
  );
};

export default Modal;

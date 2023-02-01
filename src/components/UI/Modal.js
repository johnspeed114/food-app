import React from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

//like the error modal have the backdrop and overlay as two different components then combined together
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById('overlay'); //to be more lean we used on tag instead of both backdrop and modaloverlay
  return (
    <>
      {createPortal(<Backdrop hideCart={props.hideCart} />, portalElement)}
      {/* you need another props children to thoroughly pass the cart info through the modal */}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;

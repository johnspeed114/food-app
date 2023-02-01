import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* The spread op enforces that key value pairs from inputs will be passed down */}
      {/* if the type is included or another prop in input passed it would include as input tag attribute */}
      {/* make the this component SUPER configurable */}
      <input ref = {ref} {...props.input} />
    </div>
  );
};

export default Input;

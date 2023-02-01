import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amounnt ]
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    //+variable turrns variable to a number type
    const enteredAmountNumber = +enteredAmount;

    //setup conditionals for the enteredAmount since sometimes inputs might be wrong type
    if (enteredAmount === )
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* with the spread op now we can highly config */}
      <Input
        ref={amountInpputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+ Add</button>
    </form>
  );
};

export default MealItemForm;

import React, { useReducer } from 'react';
import CartContext from './cart-context';

//initial state for reducer
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
//why outside? since we are managing the complex state of cart(this state will be passed too many childrens to be using useState)
//so we use useReducer
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    //requirement
    //1. target item in state
    //2. increase the item number by add function by that amount
    //3. then tarrget totalAmount and increase by that amount

    //[FYI]Why we shouldn't use push for array? we want to return a new array, like an immutabele way
    const updatedItems = state.items.concat(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultCartState;
};

//this component just make the state global so no other component need to use context again
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    //dispatch usually an object
    dispatchCartAction({ type: 'ADD', item: item });
  };
  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

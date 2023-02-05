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
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // [FYI] findIndex is a method that return the index of the item that match the condition since
    //sometimes we need to find AN EXISTING index of the item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //If item is not exist in the cart, then we will return -1, falsy
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        //how does this existingCartItem work with the spread? since we want only items except amount.
        //for objects in js you can't have the same key so this amount here overwrites the original amount
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //this is the way to update an array in a immutable way
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //this is condition for new item added to cart not like exiisting
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === 'REMOVE') {
    const cartItemIdx = state.items.findIndex((item) => item.id === action.id);

    const existingItem = state.items[cartItemIdx];
    let updatedItems;
    const updatedTotalAmount =
      (state.totalAmount * 100 - existingItem.price * 100) / 100;
    if (existingItem.amount === 1) {
      // updatedItems = updatedItems.slice(cartItemIdx, cartItemIdx);
      //oh! we can use filter that is interesting
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[cartItemIdx] = updatedItem;
    }
    console.log(updatedTotalAmount);
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

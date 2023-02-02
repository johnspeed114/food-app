import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  // every page should have a main tag for the main content of the body [Good Practice!!]
  const [cartDisplay, setCartDisplay] = useState(false);
  const showHandler = () => {
    setCartDisplay(true);
  };
  const hideHandler = () => {
    setCartDisplay(false);
  };

  return (
    // [FYI] we wrap the app component so we have it globally
    //[IMPORTANT] Why we don't use the useContext and cart state comp here? divide roles speicically to each file
    //LEANNNNNNN!!!
    <CartProvider>
      {/* [FYI] usually if its 2-3 level props passing no need for useContexts */}
      <Header showCart={showHandler} />
      <main>
        <Meals />
      </main>
      {cartDisplay && <Cart hideCart={hideHandler} />}
    </CartProvider>
  );
}

export default App;

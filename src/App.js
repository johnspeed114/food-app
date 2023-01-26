import { useState } from 'react';
import { createPortal } from 'react-dom';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';

function App() {
  // every page should have a main tag for the main content of the body [Good Practice!!]
  const [cartModal, setCartModal] = useState(false);
  return (
    <>
      <Header cartModal={cartModal} setCartModal={setCartModal} />
      <main>
        <Meals />
      </main>
      {cartModal
        ? createPortal(
            <Modal setCartModal={setCartModal} />,
            document.getElementById('modal-root')
          )
        : null}
    </>
  );
}

export default App;

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import CartContainer from "./components/CartContainer";
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import { useSelector, useDispatch }  from 'react-redux'

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  
   const { cartItems, isLoading } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
  <main>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </main>
  )
}
export default App;

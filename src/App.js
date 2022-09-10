import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotals } from './features/cart/cartSlice'
import { useSelector, useDispatch }  from 'react-redux'

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  return (
  <main>
    <Navbar />
    <CartContainer />
  </main>
  )
}
export default App;

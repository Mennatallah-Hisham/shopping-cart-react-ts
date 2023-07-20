import { useSelector } from "react-redux";
const cartItems=useSelector((state)=>state.cart.items);
const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart
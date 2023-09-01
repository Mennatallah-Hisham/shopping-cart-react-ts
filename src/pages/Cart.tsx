import { useSelector } from "react-redux";
import Products from "../components/Products";



const Cart = () => {
  const {items, totalPrice,
  totalQuantity}=useSelector((state)=>state.cart);
  console.log(items)
  return (
 <section>
  <h1> your cart</h1>
  <p>total price : {totalPrice}</p>
  <p>total quantity : {totalQuantity}</p>

  {items.length ===0 ?(
    <p> your cart is empty</p>
  ):(  <Products productsList={items}/>

  )}


  </section>
  )
}

export default Cart
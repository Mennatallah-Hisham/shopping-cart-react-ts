import { useSelector } from "react-redux";
import Products from "../components/Products";
import EmptyCart from "../components/Cart/EmptyCart";
import CartHeader from "../components/Cart/CartHeader";

const Cart = () => {
  const {items, totalPrice,
  totalQuantity}=useSelector((state)=>state.cart);
  console.log(items)
  return (


 
<>


  {items.length ===0 ?(
   <EmptyCart/>
  ):(  
    <>
 <CartHeader price={totalPrice}  quantity={totalQuantity}/>
      <Products productsList={items}/>
      <button className='bg-blue-900 text-white w-full capitalize mt-3 py-1 px-6'> check out</button>
  
     
      
      
    </>



  )}


</>
  )
}

export default Cart
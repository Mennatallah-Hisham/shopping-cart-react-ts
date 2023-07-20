
import { Tproduct  } from '../types/Types'
import { formatCurrency } from '../utilities/formatCurrency';
import { cartActions } from '../store/Cart';
import { useDispatch , useSelector } from 'react-redux';

const ProductCard = ({id,image,name,price,quantity}:Tproduct) => {

  const dispatch = useDispatch();

  const addItemHandler=()=>{
    dispatch(cartActions.addItem({id,image,name,price,quantity}));
  }
  const removeItemHandler=()=>{
    dispatch(cartActions.removeItem(id));
  }
  const deleteItemHandler=()=>{
    dispatch(cartActions.deleteItem(id));
  }
  const cartItems=useSelector((state)=>state.cart.items);
const currentItem= cartItems.find((item:Tproduct)=>item.id===id);

currentItem?quantity=currentItem.quantity:quantity=0;

  return (
    <div className='w-1/4'>
    <img src={image}/>
       <p>{name}</p>
       <p>{formatCurrency(price)}</p>

       {quantity===0?
        <button className='bg-blue-900 text-white w-full'
        onClick={addItemHandler}>add to cart</button>
        :
       <div>
       
            <div className='flex gap-3'>
            <button  onClick={addItemHandler}>+</button>
            <p>{quantity}</p>
            <button onClick={removeItemHandler}>-</button>
            </div>
     
        <button onClick={deleteItemHandler}>remove</button>
        </div>
       }
   
    </div>
  )
}

export default ProductCard
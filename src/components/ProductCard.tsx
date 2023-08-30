
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
    <div className='w-48 '>
    <img src={image}/>
    <div className='flex justify-between mt-3'>
    <p  className='font-semibold capitalize'>{name}</p>
       <p className='font-semibold'>{formatCurrency(price)}</p>
    </div>
     
<div className=' mt-3'>
{quantity===0?
        <button className='bg-blue-900 text-white w-full capitalize py-1'
        onClick={addItemHandler}>add to cart</button>
        :
       <div className=''>
       
            <div className='flex  justify-center gap-3'>
            <button className='bg-blue-900 text-white px-5  text-lg  ' onClick={removeItemHandler}>-</button>
          
            <p className='text-xl font-semibold'>{quantity}</p>
            <button className='bg-blue-900 text-white  px-5  text-lg ' onClick={addItemHandler}>+</button>
            </div>
     
        <button onClick={deleteItemHandler} className='bg-blue-900 text-white w-full capitalize mt-3 py-1'>remove</button>
        </div>
       }
</div>
    
   
    </div>
  )
}

export default ProductCard
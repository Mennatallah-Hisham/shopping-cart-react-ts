
import storeItems from "../data/items.json";
import { Tproduct } from '../types/Types';
import ProductCard from '../components/ProductCard';
const Store = () => {

  return (
  <section className='flex flex-wrap gap-5'>
 {storeItems.map((item:Tproduct)=>(
 <ProductCard key={item.id}{ ...item} />))}
  </section>
  )
}

export default Store


import storeItems from "../data/items.json";
import { Tproduct } from '../types/Types';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
<main className="contianer m-auto border border-red-400">
<section className='flex flex-wrap justify-center gap-5'>
 {storeItems.map((item:Tproduct)=>(
 <ProductCard key={item.id}{ ...item} />))}
  </section>

  </main>
  )
}

export default Home

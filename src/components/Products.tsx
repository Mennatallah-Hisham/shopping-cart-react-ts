
import ProductCard from './ProductCard'
import { Tproduct } from '../types/Types'


const Products = ({productsList}:Tproduct[]) => {


  return (

<div className=' lg:container flex flex-wrap gap-24 mt-10'>
{productsList.map((item:Tproduct)=>(
 <ProductCard key={item.id}{ ...item} />))}
</div>


  )
}

export default Products
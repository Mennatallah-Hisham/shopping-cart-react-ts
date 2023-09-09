
import ProductCard from './ProductCard'
import { Tproduct } from '../types/Types'


const Products = ({productsList}:Tproduct[]) => {


  return (
    <>
  

<section className='my-44 lg:container flex justify-center flex-wrap gap-10 md:gap-24  '>

{productsList.map((item:Tproduct)=>(
 <ProductCard key={item.id}{ ...item} />))}
</section>
</>



  )
}

export default Products
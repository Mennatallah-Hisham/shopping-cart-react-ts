
import ProductCard from './ProductCard'
import { Tproduct } from '../../types/Types'

type TproductList ={
productsList:Tproduct[]
}

const Products = ({productsList}:TproductList) => {


  return (
    <>
  

<section className=' my-20 lg:my-30 lg:container flex justify-center flex-wrap gap-10 lg:gap-24  '>

{productsList.map((item:Tproduct)=>(
 <ProductCard key={item.id}{ ...item} />))}
</section>
</>



  )
}

export default Products
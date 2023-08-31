
import storeItems from "../data/items.json";

import Products from "../components/Products";

const Store = () => {

  return (
  <section className='mt-10'>
    <h1 className="capitalize text-3xl  text-blue-900 font-semibold text-center"> shop now</h1>
    <Products productsList={storeItems}/>

  </section>
  )
}

export default Store
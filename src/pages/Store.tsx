
import storeItems from "../data/items.json";

import Products from "../components/Products";
import Header from "../components/Header";

const Store = () => {

  return (
    <>
        <Header/>
  <section className='mt-10'>



    <Products productsList={storeItems}/>

  </section>
  </>
  )
}

export default Store
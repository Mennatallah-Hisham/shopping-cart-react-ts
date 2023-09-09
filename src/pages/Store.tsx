
import storeItems from "../data/items.json";

import Products from "../components/product/Products";
import Header from "../components/Header";


const Store = () => {

  return (
    <>
   <Header/>
     <Products productsList={storeItems}/>


  </>
  )
}

export default Store
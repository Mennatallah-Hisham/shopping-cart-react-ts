
import storeItems from "../data/items.json";

import Products from "../components/Products";
import Header from "../components/Header";
import { Tproduct } from "../types/Types";

const Store = () => {

  return (
    <>
   <Header/>
     <Products productsList={storeItems}/>


  </>
  )
}

export default Store


import { NavLink } from "react-router-dom";
import {useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const totalQuantity= useSelector((state)=>state.cart.totalQuantity)
  return (
    <section className=" bg-blue-900 text-white  sticky top-0" >
      <div className="container flex  justify-between items-center">
      <p className="capitalize text-lg"> modren home</p>
      <nav className="flex  gap-5  sm:px-10 md:px-20 lg:px-32 ">
  <NavLink to="/" className="capitalize p-3 font-medium text-base hover:bg-blue-600">store</NavLink>
    <NavLink to="/cart" className="capitalize p-3 font-medium text-base hover:bg-blue-600">
    <span className="px-2"> ({totalQuantity})</span>cart</NavLink>


  </nav>
 



   </div>
    </section>
  

  )
}

export default Navbar;
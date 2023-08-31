

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
  
    <nav className='bg-blue-900 text-white  sticky

    '>
      <div className="flex justify-center gap-5 container  mx-auto sm:px-10 md:px-20 lg:px-32  border border-green-500">
      <NavLink to="/" className="capitalize p-3 hover:bg-blue-600">store</NavLink>
        <NavLink to="/cart" className="capitalize p-3 hover:bg-blue-600">cart</NavLink>


      </div>
     
   
     
        

    </nav>
  )
}

export default Navbar;
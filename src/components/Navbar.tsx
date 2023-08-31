

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
  
    <nav className='bg-blue-900 text-white '>
        <NavLink to="/">store</NavLink>
        <NavLink to="/cart">cart</NavLink>

    </nav>
  )
}

export default Navbar;
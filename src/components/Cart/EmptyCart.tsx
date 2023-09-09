import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
<>
<section className="container  text-center flex flex-col gap-8 items-center my-44">


<h1> your cart is empty</h1>
<p> check out latest collection</p>
<Link to="/" 
          className="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
          capitalize"
        >
          go to store
        </Link>
        </section>

</>
  )
}

export default EmptyCart;
import { formatCurrency } from "../../utilities/formatCurrency"
 type propsType={
    price:number,
    quantity:number
}

const CartHeader = ({price , quantity}:propsType) => {

  return (
  <section className="container flex flex-col items-center gap-10  my-10 bg-gray-100
   py-6">
    <h1> your cart </h1>
    <div className="text-center md:text-left flex gap-10">

    <p className=" capitalize font-bold  text-xl text-blue-900">total price : 
        <span className="ml-3 font-medium text-2xl">

        {formatCurrency(price)}
            </span></p>
  <p className=" capitalize font-bold text-xl text-blue-900">total quantity :
  <span className="ml-3 font-medium text-2xl">
 {quantity}
 </span></p>
 

    </div>


    </section>
  )
}

export default CartHeader
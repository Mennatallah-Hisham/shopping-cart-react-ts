 type propsType={
    price:number,
    quantity:number
}

const CartHeader = ({price , quantity}:propsType) => {
 
  return (
  <section className="container flex justify-center my-10">
    <div className="text-left">

    <p className=" capitalize font-bold text-xl text-blue-900">total price : 
        <span className="ml-3 font-medium text-2xl">

        {price} $
            </span></p>
  <p className=" capitalize font-bold text-xl text-blue-900">total quantity : {quantity}</p>

    </div>
     
    </section>
  )
}

export default CartHeader
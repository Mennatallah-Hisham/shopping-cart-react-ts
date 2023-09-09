
import Banner from "./Banner"

const Header = () => {
  return (
<header  className=" container flex justify-center items-center  flex-wrap gap-8 lg:flex-nowrap my-10 " >
    <div className="px-3">
    <h1 className="capitalize text-4xl lg:text-5xl  text-blue-900 font-semibold text-center">
        Expolre our latest collections for you
    </h1>
    <p className="text-center mt-5 lg:text-left  lg:pl-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vitae ducimus reprehenderit</p>
    </div>
    
    <Banner></Banner>

    </header>
  )
}

export default Header

const Banner = () => {
  return (
    <section className="  flex justify-center gap-5 ">
        <div className="flex flex-col  gap-5">
            <div className="banner__img-sm">
            <img  src="../../public/banner/b1.jfif"/>
            </div>
            <div  className="banner__img-sm">
            <img src="../../public/banner/b2.png"/>
            </div>
   
       

        </div>
        <div className="flex flex-col  gap-5">
            <div className="banner__img-sm">
            <img  src="../../public/banner/b4.jfif"/>
            </div>
            <div  className="banner__img-sm">
            <img src="../../public/banner/b5.jfif"/>
            </div>
   
       

        </div>
        <div className="banner__img-lg">
        <img src="../../public/banner/b3.png"/>
        </div>
       
      

    </section>
  )
}

export default Banner
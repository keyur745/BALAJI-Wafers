import { Link } from "react-router-dom";
import ImageTrail from '../Animation/ImageTrail'
import Footer from "../components/Footer";

const Homepage = () => {
           

  return (
      <>
        <div style={{ height: '700px',  overflow: 'hidden'}}>
            <ImageTrail
            // key={key}
            items={[
                  " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Masala_Masti_Wafers_Default_bc03ebaa-4c86-4de2-977b-c25c873ade91.png?v=1749561574&width=1500",
                  " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Chaat_Chaska_Wafers_Default_36b39d51-f832-4f38-897a-df0aff2f5f24.png?v=1749561464&width=1500",
                  " https://www.balajiwafers.com/cdn/shop/files/Crunchex_Chilli_Tadka_Wafers_Default_76e7f7b0-9629-4f93-b320-b5793e035ce8.png?v=1749560920&width=1500",
                  " https://www.balajiwafers.com/cdn/shop/files/Rumbles_Pudina_Twist_Wafers_Default_9b819c2b-43f6-4b48-8121-f29950aeda33.png?v=1749560637&width=1500",
                  " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Tomato_Twist_Wafers_Default_f0a9a1d5-cbe0-4475-9aac-0423acae381c.png?v=1749561520&width=1500",
                  " https://www.balajiwafers.com/cdn/shop/files/Banana_Mari_Wafers_Default_f5103cc1-4b49-42ba-a6fe-674a548b62b0.png?v=1749560524&width=1500",
                  " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Peri_Peri_Wafers_Defult_c6f530ae-1fbd-4e8a-be74-89f5eff3c6a8.png?v=1749561037&width=1500",
                  " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Cream_Onion_Wafers_Default_4a89e1e3-54a9-4089-92de-c1ad75b11156.png?v=1746173853&width=1500",
                  " https://www.balajiwafers.com/cdn/shop/files/Crunchem_Pizzy_Masala_Wafers_Default_0b57b5df-b8e0-4d51-ad08-73c93c7b3ffb.png?v=1749561106&width=1500",
                  // ...
            ]}
            variant={1}
            />
        </div>


    <section className="w-full  bg-gradient-to-r from-red-500 to-yellow-500 text-black font-[pally1] ">

      <div className="parent absolute z-10 top-0 left-0 w-full  ">
            
        <div className="absolute w-full h-screen z-30 hero-content flex flex-col justify-center items-center">
          <h2 className="text-7xl font-[pally3] font-black mb-4 text-[#bbff28] flex text-center ">
            India ka Blockbuster Snack </h2>
          <p className="text-lg mb-6 text-center tracking-tight">Balaji Wafers brings the perfect blend of crunch and spice to your fingertips. <br /> Made with ❤, loved by millions.</p>
          <Link to="/products" className=" bg-yellow-300 border-3 border-black text-red-600 px-6 py-3 rounded-full font-[pally3] text-xl  hover:bg-black transition">Explore Products</Link>
        </div>

        <div className="w-full top-0 left-0   flex justify-center  md:mt-0">
            <div className="absolute bg-black/20  z-20 top-0 left-0 w-full h-full"></div>
          <div className="w-full  " id="frame">
            <video  
                  className="w-full "
                  autoPlay
                  loop
                  muted
                  >
                  <source src="/Balaji_wafer.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>

      </div>
    </section>
    <Footer/>
      </>
  );
};

export default Homepage
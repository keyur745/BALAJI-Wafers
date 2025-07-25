import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Homepage = () => {
           

  return (
      <>
    <section className="w-full h-screen bg-gradient-to-r from-red-500 to-yellow-500 text-black font-[pally1] ">
      <div className="parent absolute z-10 top-0 left-0 w-full  ">
            
        <div className="absolute w-full h-screen z-30 hero-content flex flex-col justify-center items-center">
          <h2 className="text-7xl font-[pally3] font-black mb-4 text-[#bbff28] flex text-center ">
            India ka Blockbuster Snack </h2>
          <p className="text-lg mb-6 text-center tracking-tight">Balaji Wafers brings the perfect blend of crunch and spice to your fingertips. <br /> Made with ❤, loved by millions.</p>
          <Link to="/products" className="bg-yellow-300 border-3 border-black text-red-600 px-6 py-3 rounded-full font-[pally3] text-xl inline-block hover:bg-black transition">Explore Products</Link>
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
import { useContext } from "react";
import { productcontext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Productspage = () => {
  const { products } = useContext(productcontext);

      console.log(products);
      

  return (
    <section className=" h-screen    top-0  bg-gray-100 font-[pally1]">
      <div className="absolute  w-full h-screen object-cover  blur-xl">
        <img src="./Home_img.png" alt="" srcset="" />
        <img className="rotate-180" src="./Home_img.png" alt="" srcset="" />
      </div>
      <div className="container h-screen absolute mx-auto ">
        <h2 className=" text-7xl backdrop-blur-lg py-10  font-bold text-center mb-10 text-[yellow] font-[pally3]">
          Our WAFERS 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-60">
          {products.map((product) => (
            
            <div
              key={product.id}
              className={`product-card flex flex-col  justify-center bg-[#f0f0f0]  backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden  hover:bg-neutral-300  hover:bg-[${product.bg}] transition transform hover:-translate-y-2 `}
            >
              <img
                src={product.image}
                alt={product.name}
                className=" h-72   object-contain"
              />
              <div className=" flex flex-col text-center border-t-red-300 ">
                <h3 className="text-xl text-black font-[pally3] py-0.5 px-4 font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 font-[pally1] px-4 mb-4">{product.description}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="bottom-0 text-black tracking-[2px] font-[pally3] text-lg w-full rounded-b-2xl bg-[#bbff28] border-2  py-3 "
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productspage;

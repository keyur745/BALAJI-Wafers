import { useNavigate, useParams } from 'react-router-dom';
import { productcontext } from '../context/ProductContext';
import { useContext } from 'react';
import Footer from '../components/Footer';

const ProductDetailpage = () => {
  const { products } = useContext(productcontext);
  const navigate = useNavigate();

  // Get productId from route params
  const { id } = useParams();
  const parsedProductId = parseInt(id);

  // Find the product by ID
  const product = products.find((p) => p.id === parsedProductId);

  if (!product) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-2xl text-red-600">Product Not Found</h2>
        <button onClick={() => navigate('/products')} className="mt-4 text-blue-600 underline">Go Back</button>
      </section>
    );
  }

  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4 product-detail">
        <div className="w-full h-fit flex flex-col md:flex-row gap-8 p-5 ">
          <div className=" md:w-1/2 w-full h-fit rounded-3xl bg-[#eaeaea] overflow-hidden">
            <img src={product.bigimg} alt={product.name} className=" shadow-2xl static w-full   " />
          </div>
          <div className="md:w-1/2 bg-gradient-to-br  from-yellow-400 to-yellow-300  p-10 rounded-3xl">
            <h3 className='text-[white] text-lg font-semibold mb-7 tracking-[2px]' >WAFER</h3>
            <h2 className="text-5xl mb-7 font-bold font-[pally3] tracking-[1px] text-blue-600 ">{product.name}</h2>
            <p className=" font-semibold mb-7 font-[pally2] text-3xl tracking-[1px] text-red-600 ">
                  {product.price}
            </p>
            <p className="text-gray-700 mb-10">{product.description}</p>
                  <div className=' flex gap-5'>
                        <div className='weight-box flex flex-col gap-5'>
                              <div className='text-center py-4 w-37 flex flex-col justify-center items-center font-[pally3] tracking-[1px] gap-3  text-white text-xl rounded-2xl bg-red-700 hover:bg-green-600'>
                                    <p>Weight</p> 
                                    <p className='w-15 h-15 flex items-center justify-center rounded-full text-black font-[pally2] text-[1rem] font-bold  bg-yellow-300'>135g</p>
                              </div>
                              <button onClick={() => navigate('/products')} className="back-btn cursor-pointer bg-red-700 h-37 w-37 text-white text-3xl font-[pally2] px-6 py-2 rounded-full hover:bg-green-600 hover:text-white hover:tracking-[4px] transition">
                                    Back
                              </button>
                        </div>
                        <div className="ingredient w-full h-fit p-10 rounded-2xl text-white font-[pally2] tracking-wider text-lg bg-red-700 hover:bg-green-600 ">
                              <p className='text-xl font-[pally3] mb-3 text-black tracking-[1px]'>Ingredient List </p>
                              {product.ingr}
                        </div>

                  </div>
            
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default ProductDetailpage;

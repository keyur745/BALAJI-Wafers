import { Route, Routes } from "react-router-dom"
import AboutUspage from "../pages/AboutUspage"
import Homepage from "../pages/Homepage"
import ProductDetailpage from "../pages/ProductDetailpage"
import Productspage from "../pages/Productspage"

const Mainroutes = () => {
  return (
    <div className="relative">
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productspage />} />
          <Route path="/products/:id" element={<ProductDetailpage />} />
          <Route path="/about" element={<AboutUspage />} />
        </Routes>
    </div>
  )
}

export default Mainroutes
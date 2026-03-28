import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api.js";

export const ProductContext = createContext();

export function ProductProvider({children})
{

    const [product, setSingleProduct] = useState(null);
    const [products,setProduct]=useState([])
     const [loading, setLoading] = useState(true);

       const fetchProduct = async () => {
    try {
      const res = await api.get("/product");
      if (res.data.product.length === 0) {
        toast.success("No Menu Yet, Explore to find more.");
      }
      console.log(res);
      setProduct(res.data.product);
      toast.success("fetch done!");
    } catch (err) {
      toast.error("something went error");
    } finally {
      setLoading(false);
    }
  };


    const getProductItem = async (productId) => {
    try {
      const res = await api.get(`/product/${productId}`);
      if (res.status!==200) {
        toast.error(res.data.message || "");
        return;
      }
      toast.success(res.data.message || "");
      setSingleProduct(res.data.product);
    } catch (err) {
      toast.error("something went error");
    }
  };







  return (
    <>
      <ProductContext.Provider value={{ products, getProductItem,product,fetchProduct, loading }}>
        {children}
      </ProductContext.Provider>
    </>
  );
}


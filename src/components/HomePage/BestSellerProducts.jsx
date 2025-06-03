import React, { useEffect, useState } from "react";
import ProductCard from "../../components/HomePage/ProductCard";
import { getBestSellerProducts } from "../../services/api";

function BestSellerProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getBestSellerProducts();
        setProducts(data.slice(0, 8));
        setError(null);
      } catch (error) {
        setError("Ürünler alınırken hata oluştu");
        console.error("Ürünler alınırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="relative w-full h-[700px] flex justify-center items-center bg-[#FAFAFA]">
        <div className="text-xl">Yükleniyor...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative w-full h-[700px] flex justify-center items-center bg-[#FAFAFA]">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex justify-center items-center bg-[#FAFAFA]">
      <div className="flex w-[1050px] flex-col justify-center mt-10 mb-20">
        <div className="flex flex-col gap-4">
          <span className="text-[20px] font-normal">Featured Products</span>
          <span className="text-2xl font-bold">BESTSELLER PRODUCTS</span>
          <span className="text-sm font-normal">
            Problems trying to resolve the conflict between
          </span>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between gap-4 mt-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSellerProducts;

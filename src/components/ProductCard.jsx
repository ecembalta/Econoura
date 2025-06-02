import React, { useState } from "react";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleColorSelect = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="w-[348px] h-[615px] md:w-[240px] bg-white border-2 border-gray-200 shadow-md overflow-hidden font-sans">
      <div className="relative bg-yellow-400 h-[290px] flex items-center justify-center">
        <img
          src={selectedVariant.image}
          alt="product"
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-7 left-0 w-full flex justify-center gap-4">
          <button className="bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-md hover:bg-gray-100 transition">
            <Heart color="#222" size={20} />
          </button>
          <button className="bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-md hover:bg-gray-100 transition">
            <ShoppingCart color="#222" size={20} />
          </button>
          <button className="bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-md hover:bg-gray-100 transition">
            <Eye color="#222" size={20} />
          </button>
        </div>
      </div>
      <div className="pt-12 pb-5 px-5">
        <div className="flex items-center justify-between">
          <span className="text-sky-500 font-semibold text-base">
            {product.title}
          </span>
          <span className="bg-gray-900 text-white rounded-xl px-3 py-1 font-medium text-sm flex items-center gap-1">
            <Star color="#FFD600" size={14} /> {product.rating}
          </span>
        </div>
        <div className="font-bold text-xl mt-2 mb-1">{product.category}</div>
        <div className="text-gray-500 text-[15px] mb-3">
          {product.description}
        </div>
        <div className="flex items-center gap-1 text-gray-900 font-semibold text-[15px] mb-2">
          <ShoppingCart size={16} />
          <span>{product.sales}</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-400 font-semibold text-lg line-through">
            $16.48
          </span>
          <span className="text-green-700 font-bold text-lg">
            ${product.price}
          </span>
        </div>
        <div className="flex gap-2 mb-4">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => handleColorSelect(variant)}
              className={`w-5 h-5 rounded-full border-2 border-white shadow ${
                selectedVariant.id === variant.id ? "ring-2 ring-sky-500" : ""
              }`}
              style={{ backgroundColor: variant.color }}
            />
          ))}
        </div>
        <button className="w-full py-2 border-2 border-sky-500 rounded-full bg-white text-sky-500 font-semibold text-lg hover:bg-sky-50 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

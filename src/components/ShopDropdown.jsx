import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getCategories } from "../services/api";

function ShopDropdown({ isOpen, onToggle, onMouseEnter, onMouseLeave }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategories();
        setCategories(data);
        setError(null);
      } catch (err) {
        setError("Kategoriler yüklenirken bir hata oluştu.");
        console.error("Kategorileri getirme hatası:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 hover:text-gray-800 text-neutral-500 font-bold"
        onClick={onToggle}
      >
        <span>Shop</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg z-50 p-6 grid grid-cols-2 gap-10 w-[480px]">
          {loading ? (
            <div className="col-span-2 text-center py-4">Yükleniyor...</div>
          ) : error ? (
            <div className="col-span-2 text-center py-4 text-red-500">
              {error}
            </div>
          ) : (
            categories.map((category) => (
              <div key={category.id}>
                <h3 className="font-bold text-neutral-800 mb-4">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.id}>
                      <Link
                        to={`/shop/${category.name.toLowerCase()}/${
                          subcategory.slug
                        }`}
                        className="hover:text-gray-800"
                      >
                        {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ShopDropdown;

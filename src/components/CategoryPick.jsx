import React, { useState, useEffect } from "react";
import { getCategories } from "../services/api";

const CategoryPick = () => {
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
    <div className="relative w-full md:h-[700px] flex justify-center items-center bg-[#FAFAFA]">
      <div className="flex w-[1050px] flex-col justify-center my-10">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold">EDITOR'S PICK</span>
          <span className="text-[20px] font-normal">
            Problems trying to resolve the conflict between
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:max-w-[1050px] mt-10 gap-4 md:gap-0 justify-between items-center">
          {categories.length > 0 && (
            <>
              <div className="h-[500px] w-[80%] md:w-[510px] md:h-[500px] relative">
                <img
                  src={categories[0]?.image}
                  alt={categories[0]?.name}
                  className="w-full h-full object-cover"
                />
                <span className="text-l font-bold bg-white p-4 absolute bottom-4 left-4">
                  {categories[0]?.name || "Kategori 1"}
                </span>
              </div>
              <div className="h-[500px] w-[80%] md:h-[500px] md:w-[240px] relative">
                <img
                  src={categories[1]?.image}
                  alt={categories[1]?.name}
                  className="w-full h-full object-cover"
                />
                <span className="text-l font-bold bg-white p-4 absolute bottom-4 left-4">
                  {categories[1]?.name || "Kategori 2"}
                </span>
              </div>
              <div className="w-[80%] md:h-[500px] md:w-[240px] flex flex-col items-center justify-center gap-[20px]">
                <div className="w-[80%] h-[240px] w-full relative">
                  <img
                    src={categories[2]?.image}
                    alt={categories[2]?.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="text-l font-bold bg-white p-4 absolute bottom-4 left-4">
                    {categories[2]?.name || "Kategori 3"}
                  </span>
                </div>
                <div className="w-[80%] h-[240px] w-full relative">
                  <img
                    src={categories[3]?.image}
                    alt={categories[3]?.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="text-l font-bold bg-white p-4 absolute bottom-4 left-4">
                    {categories[3]?.name || "Kategori 4"}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPick;

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHeroSliderData, getSliderData } from "../services/api";

const Slider = ({ isHero = true, height = "600px" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        setLoading(true);
        const data = isHero ? await getHeroSliderData() : await getSliderData();
        setSlides(data);
        setError(null);
      } catch (err) {
        setError("Slider verileri yüklenirken bir hata oluştu.");
        console.error("Slider verilerini getirme hatası:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSliderData();
  }, [isHero]);

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [slides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => {
      return (prevSlide - 1 + slides.length) % slides.length;
    });
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  if (loading) {
    return (
      <div
        className={`relative h-[600px] w-full flex justify-center items-center bg-gray-100`}
      >
        <div className="text-xl">Yükleniyor...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`relative h-[600px] w-full flex justify-center items-center bg-gray-100`}
      >
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className={`relative h-[600px] w-full overflow-hidden`}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 md:w-[975px] flex flex-col items-center md:items-start justify-center gap-6 text-center text-white px-4 md:pl-60">
              <span className="text-base font-bold mb-2">{slide.subTitle}</span>

              <span className="text-[40px] md:text-[58px] font-bold mb-4">
                {slide.title}
              </span>
              <p className="text-xl md:text-xl mb-8 max-w-3xl text-center md:text-left md:w-[70%]">
                {slide.description}
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4">
                {slide.price && (
                  <span className="text-2xl font-bold text-white">
                    {slide.price}
                  </span>
                )}
                <Link
                  to={slide.buttonLink}
                  className="px-8 py-3 bg-[#2DC071] w-auto text-center md:self-start text-white font-medium text-2xl rounded-md hover:bg-[#25a05d] transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
        onClick={goToPrevSlide}
      >
        <ChevronLeft />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
        onClick={goToNextSlide}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Slider;

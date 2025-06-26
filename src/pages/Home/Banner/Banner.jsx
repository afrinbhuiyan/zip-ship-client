import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../../assets/banner/banner1.png";
import slider2 from "../../../assets/banner/banner2.png";
import slider3 from "../../../assets/banner/banner3.png";
import { FiArrowRight } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        renderIndicator={(clickHandler, isSelected, index,) => (
          <button
            onClick={clickHandler}
            className={`mx-1.5 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              isSelected ? "bg-white w-8" : "bg-white/60"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        )}
      >
        <div className="relative">
          <img
            src={slider1}
            alt="Premium delivery services"
          />
        </div>

        <div className="relative">
          <img
            src={slider2}
            alt="Nationwide coverage"
          />
        </div>

        <div className="relative">
          <img
            src={slider3}
            alt="Temperature controlled shipping"
          />
        </div>
      </Carousel>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/30 hover:bg-white/50 p-3 rounded-full z-10"
        onClick={() =>
          document.querySelector(".carousel .control-prev").click()
        }
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute border right-4 top-1/2 -translate-y-1/2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/30 hover:bg-white/50 p-3 rounded-full z-10"
        onClick={() =>
          document.querySelector(".carousel .control-next").click()
        }
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Banner;

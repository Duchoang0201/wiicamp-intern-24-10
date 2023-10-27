"use client";

import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/grid";
import "swiper/css/pagination";

import ProductCardFill from "@/components/Commons/ProductCardFill";
import Title from "@/components/Commons/Title";

import useTrans from "@/hooks/useTrans";

import "swiper/css";

function OurProducts({ ourProducts }) {
  const { ourProductsContent } = useTrans();
  const swiperRef = useRef();
  const handleSlidePrev = () => {
    swiperRef.current.slidePrev();
  };

  const handleSlideNext = () => {
    swiperRef.current.slideNext();
  };
  return (
    <div>
      <Title
        content={ourProductsContent.content}
        title={ourProductsContent.title}
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
      />

      <div className="container pt-10  ">
        <Swiper
          modules={[Grid]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              grid: { fill: "row", rows: 2 },

              spaceBetween: 30,
            },
            480: {
              slidesPerView: 2,
              grid: { fill: "row", rows: 2 },

              spaceBetween: 30,
            },
            800: {
              grid: { fill: "row", rows: 2 },

              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              grid: { fill: "row", rows: 2 },
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {ourProducts &&
            ourProducts.map((item) => (
              <SwiperSlide key={item.id} className=" ">
                <ProductCardFill
                  item={item}
                  isEye={{ isActive: true }}
                  isDiscount={{ isActive: false, value: 20 }}
                  isHeart={{ isActive: true }}
                />
                <div className="absolute h-10 w-full bg-Neutral-600  flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    type="submit"
                    className="bg-black text-white-0 py-2 px-5"
                  >
                    Add to cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="pt-20 border-b border-red-600" />
    </div>
  );
}

export default OurProducts;

OurProducts.propTypes = {
  ourProducts: PropTypes.arrayOf(Object),
};
OurProducts.defaultProps = {
  ourProducts: [], // Set a default value for products (an empty array in this case)
};

import React, { useCallback, useRef } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import ProductCart from "@/components/Commons/ProductCard";
import TitleFunction from "@/components/Commons/TitleFunction";

import useTrans from "@/hooks/useTrans";

import "swiper/css";

function CardBanner({ products }) {
  const swiperRef = useRef();
  const { flashSaleContent } = useTrans();

  const handleSlidePrev = useCallback(() => {
    swiperRef.current.slidePrev();
  }, []);

  const handleSlideNext = useCallback(() => {
    swiperRef.current.slideNext();
  }, []);

  return (
    <div className="relative">
      <TitleFunction
        content={flashSaleContent.content}
        title={flashSaleContent.title}
        onPrev={handleSlidePrev}
        onNext={handleSlideNext}
        isCountDown
        paddingY="16"
        buttonText="View All"
      />

      <div className="container xxl:max-w-[1465px] mt-[40px] relative max-h-[350px]">
        <div className="xxl:ml-[115px] ">
          <Swiper
            watchSlidesProgress
            // slidesPerView="auto"
            // spaceBetween={30}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={{
              nextEl: ".review-swiper-button-next",
              prevEl: ".review-swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper xxl:!overflow-visible  "
            breakpoints={{
              1280: {
                slidesPerView: "auto",
                spaceBetween: 30,
              },
              990: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              860: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              680: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              480: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              400: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              320: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {products.length > 0 &&
              products.map((item, index) => {
                return (
                  <SwiperSlide
                    className=" swiper-slide !max-w-[270px] !h-auto"
                    key={item.id}
                  >
                    <Link href={`/products/${item.id}`}>
                      <ProductCart
                        index={index}
                        item={item}
                        isEye={{ isActive: true }}
                        isDiscount={{ isActive: true, value: 20 }}
                        isHeart={{ isActive: true }}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CardBanner;

CardBanner.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(Object)),
};

CardBanner.defaultProps = {
  products: [],
};
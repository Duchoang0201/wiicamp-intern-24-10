import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "@/components/Commons/ProductCard";

import { axiosClient } from "@/libraries/axiosClient";

import ProductDetail from "./ProductDetail";

function hasHttps(url) {
  return url.includes("https");
}

function ProductId({ product, related }) {
  return (
    <div className="container mt-[80px] mb-[140px] ">
      <div className="my-[80px] flex flex-row justify-between">
        {" "}
        <span>Home / {product.title}</span>
      </div>

      <ProductDetail product={product} related={related} />

      <div className="flex flex-row justify-between mt-[140px] mb-[60px]">
        <div className=" flex flex-row items-center justify-start  ">
          <div className="w-5 h-10 bg-Secondary-2 rounded-sm " />
          <div className="text-Secondary-2 text-lg px-5 font-semibold ">
            Related Item
          </div>
        </div>
        <button
          type="button"
          className="py-[16px] rounded-md min-h-[44px] border border-Neutral-200  text-black-0 px-4 md:px-12 whitespace-nowrap"
        >
          See All
        </button>
      </div>
      <Swiper
        freeMode
        watchSlidesProgress="true"
        breakpoints={{
          1280: {
            slidesPerView: "auto",
            spaceBetween: 30,
          },
          860: {
            slidesPerView: "4",
            spaceBetween: 30,
          },
          480: {
            slidesPerView: "3",
            spaceBetween: 30,
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
        }}
      >
        {related &&
          related.map((item) => (
            <SwiperSlide
              key={item.id}
              className="!max-w-[270px] !max-h-[350px]"
            >
              <Link href={`/products/${item.id}`}>
                <ProductCard
                  item={item}
                  isEye={{ isActive: true }}
                  isDiscount={{ isActive: false, value: 20 }}
                  isHeart={{ isActive: true }}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ProductId;

export async function getStaticPaths() {
  const results = await axiosClient.get(`/products`);
  const products = results.data;
  const paths = products.map((item) => ({
    params: { id: `${item.id}` },
  }));
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const results = await axiosClient.get(`/products/${params.id}`);
  const product = results.data;

  // Fetch related items based on category
  const relatedItem = await axiosClient.get(
    `/categories/${product.category.id}/products`,
  );
  const relatedData = relatedItem.data;
  const newRelated = relatedData.filter((c) => hasHttps(c.images[0]));
  return { props: { product, related: newRelated } };
}

ProductId.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  related: PropTypes.instanceOf(Object).isRequired,
};
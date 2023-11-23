import React from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct module

import AppButton from "@/components/App/AppButton/AppButton";

import CardBanner from "./CardBanner";

function FlashSaleBanner({ products }) {
  return (
    <div className=" text-black  ">
      <CardBanner products={products} />

      <div className="pt-[59px] pb-[60px] flex flex-row justify-center border-b border-Neutral-200 container ">
        <AppButton buttonText="View All Products" paddingY="16" />
      </div>
    </div>
  );
}

export default FlashSaleBanner;
FlashSaleBanner.propTypes = {
  products: PropTypes.arrayOf(Object),
};
FlashSaleBanner.defaultProps = {
  products: [], // Set a default value for products (an empty array in this case)
};
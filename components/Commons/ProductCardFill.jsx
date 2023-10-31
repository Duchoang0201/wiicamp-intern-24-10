import React from "react";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

import Rated from "../Rating/Rated";

function ProductCardFill({ item, isHeart, isEye, isDiscount }) {
  return (
    <div>
      <div className="!h-[250px] relative group justify-center overflow-hidden text-sm font-medium text-center text-white  rounded-lg ">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="w-full !h-full object-contain "
          src={item.image}
          alt={item.title}
        />
        <div className="absolute h-10 w-full bg-black-0  flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button type="submit" className="bg-black text-white-0 py-2 px-5">
            Add to cart
          </button>
        </div>
        {isHeart.isActive && (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full top-4 right-4 dark:border-gray-900">
            <div className="px-2 py-2 bg-white-0 rounded-full">
              <Heart />
            </div>
          </div>
        )}
        {isEye.isActive && (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full top-16 right-4 dark:border-gray-900">
            <div className="px-2 py-2 bg-white-0 rounded-full">
              <Eye />
            </div>
          </div>
        )}
        {isDiscount.isActive && (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-red-500  rounded-full top-4 left-6 dark:border-gray-900">
            <div className="font-thin px-3 py-1 bg-Secondary-2 rounded-sm text-white-0">
              -{isDiscount.value}%
            </div>
          </div>
        )}
      </div>

      <div className="justify-center items-center h-10">
        <p className="font-bold truncate text-ellipsis overflow-hidden">
          {item.title}
        </p>
      </div>
      <div className="justify-center items-center font-bold">
        <span className="text-Button-1  ">
          ${Math.round(Number(item.price) * 0.8)}
        </span>

        <span className="px-4 line-through opacity-50">${item.price}</span>
      </div>

      <div className=" pt-2 flex flex-row items-center font-bold ">
        <Rated data={item.rating} />
        <p className="px-4 opacity-50">({item.rating.count})</p>
      </div>
    </div>
  );
}

export default ProductCardFill;

ProductCardFill.propTypes = {
  item: PropTypes.shape(Object),
  isHeart: PropTypes.instanceOf(Object),
  isEye: PropTypes.instanceOf(Object),
  isDiscount: PropTypes.instanceOf(Object),
};
ProductCardFill.defaultProps = {
  item: {},
  isHeart: {},
  isEye: {},
  isDiscount: {},
};

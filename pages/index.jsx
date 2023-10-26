import React from "react";
import PropTypes from "prop-types"; // Import PropTypes from the correct module

import IndexPage from "@/components/IndexPage/IndexPage";

import { axiosClient } from "@/libraries/axiosClient";

export default function Home({ products }) {
  return (
    <main>
      <IndexPage products={products} />
    </main>
  );
}

export async function getStaticProps() {
  const res = await axiosClient.get("/products");
  const products = res.data;
  return {
    props: {
      products,
    },
  };
}
Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      category: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};

Home.defaultProps = {
  products: [], // Set a default value for products (an empty array in this case)
};
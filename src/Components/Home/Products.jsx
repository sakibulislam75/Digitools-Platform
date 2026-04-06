import React, { use, useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ data }) => {
  const [isselected, setSelected] = useState("products");
  const dt = use(data);
  return (
    <>
      <div className=" text-center my-10 space-y-2.5 mt-18 mb-8">
        <h1 className="text-5xl font-bold text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="text-center flex justify-center items-center gap-4 mb-10">
        <button
          onClick={() => setSelected("products")}
          className={`${isselected == "products" ? "btn p-5 text-white rounded-full bg-[linear-gradient(to_right,#6B2AF8,#9514FA)] " : "btn p-5 rounded full"}`}
        >
          Products
        </button>
        <button
          onClick={() => setSelected("cart")}
          className={`${isselected == "cart" ? "btn p-5  text-white rounded-full bg-[linear-gradient(to_right,#6B2AF8,#9514FA)] " : "btn p-5 rounded full"}`}
        >
          Cart
        </button>
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 gap-4 ">
        {dt.map((item) => (
          <ProductCard key={item.id} data={item}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;

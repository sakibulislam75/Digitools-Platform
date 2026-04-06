import React, { use, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const Products = ({ data, isadded, setAdded }) => {
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
      <div className="text-center flex justify-center items-center  mb-10">
        <button
          onClick={() => setSelected("products")}
          className={`${isselected == "products" ? "font-semibold p-2 px-4 text-white rounded-full bg-[linear-gradient(to_right,#6B2AF8,#9514FA)] " : "font-semibold p-2 px-4 rounded full "}`}
        >
          Products
        </button>
        <button
          onClick={() => setSelected("cart")}
          className={`${isselected == "cart" ? "font-semibold p-2 px-4  text-white rounded-full bg-[linear-gradient(to_right,#6B2AF8,#9514FA)] " : "font-semibold p-2 px-4 rounded full "}`}
        >
          Cart ({isadded.length})
        </button>
      </div>
      {isselected == "products" ? (
        <div className="w-10/12 mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 gap-4 mb-23">
          {dt.map((item) => (
            <ProductCard
              key={item.id}
              data={item}
              isadded={isadded}
              setAdded={setAdded}
            ></ProductCard>
          ))}
        </div>
      ) : (
        <div>
          {" "}
          <Cart isadded={isadded} setAdded={setAdded}></Cart>
        </div>
      )}
    </>
  );
};

export default Products;

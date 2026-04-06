import React from "react";
import { FaCheck } from "react-icons/fa";

const ProductCard = ({ data }) => {
  return (
    <div className="relative bg-white rounded-2xl p-8  flex flex-col gap-4 shadow-sm transition duration-1000 hover:scale-102">
      {data.tag == "new" ? (
        <div className="badge badge-soft badge-success absolute top-4 right-4">
          {data.tag}
        </div>
      ) : data.tag == "popular" ? (
        <div className="badge badge-soft badge-info absolute top-4 right-4">
          {data.tag}
        </div>
      ) : data.tag == "best seller" ? (
        <div className="badge badge-soft  badge-warning absolute top-4 right-4 ">
          {data.tag}
        </div>
      ) : null}

      <img src={data.image} alt={data.name} className="w-25 h-auto  pt-4" />

      <div>
        <h3 className="text-2xl font-bold pb-1">{data.name}</h3>
        <p className="text-sm text-gray-500 mt-1 text-justify">
          {data.description}
        </p>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-gray-900">${data.price}</span>
        <span className="text-sm text-gray-400">/{data.period}</span>
      </div>

      <ul className="flex flex-col gap-2">
        {data.features.map((ftr) => (
          <li
            key={ftr.id}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <FaCheck className="text-green-500" /> {ftr}
          </li>
        ))}
      </ul>

      <button className="bg-gradient-to-r from-[#6B2AF8] to-[#9514FA] mt-auto  rounded-full text-white  btn p-2  font-semibold">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;

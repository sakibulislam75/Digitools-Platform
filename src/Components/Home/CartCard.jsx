import React from "react";

const CartCard = ({ isadded }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-2xl p-8 flex items-center justify-between">
      <div className=" flex gap-15 items-center">
        <img
          src={isadded.image}
          alt=""
          className="h-15 w-auto object-contain"
        />
        <span className="space-y-2">
          <h1 className="text-3xl font-bold">{isadded.name}</h1>
          <span className="flex items-baseline">
            <h2 className="text-2xl font-bold">${isadded.price}</h2>
            <h2 className="text-gray-400">/{isadded.period}</h2>
          </span>
        </span>
      </div>
      <div>
        <button className="btn text-red-600">Rmove</button>
      </div>
    </div>
  );
};

export default CartCard;

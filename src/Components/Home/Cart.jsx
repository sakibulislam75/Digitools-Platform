import React from "react";
import CartCard from "./CartCard";

const Cart = ({ isadded }) => {
  if (isadded.length == 0)
    return (
      <div>
        <p className="text-center">ddufsaff</p>
      </div>
    );
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 gap-5 bg-neutral-50 shadow-lg p-3 mb-8">
      <h1 className="text-left text-5xl font-bold">Your Cart</h1>
      {isadded.map((item) => (
        <CartCard isadded={item} key={item.id}></CartCard>
      ))}
    </div>
  );
};

export default Cart;

import React from "react";
import CartCard from "./CartCard";
import { IoCartOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const Cart = ({ isadded, setAdded, price, setPrice }) => {
  const checkout = () => {
    setAdded([]);
    toast.success("Successfully Placed Your Order!");
  };
  if (isadded.length == 0)
    return (
      <div className="w-10/12 mx-auto bg-neutral-50 shadow-lg p-15 mb-15">
        <h1 className="text-left text-5xl font-bold">Your Cart</h1>
        <IoCartOutline className="w-full h-40 text-gray-400 text-center" />
        <p className="text-center py-1 text-gray-400">Your Cart Is Empty!</p>
      </div>
    );
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 gap-10 bg-neutral-50 shadow-lg p-10 mb-10 rounded-2xl">
      <h1 className="text-left text-5xl font-bold">Your Cart</h1>

      {isadded.map((item) => (
        <CartCard
          isadded={item}
          key={item.id}
          setAdded={setAdded}
          allProducts={isadded}
          price={price}
          setPrice={setPrice}
        />
      ))}

      {/* Total Section */}
      <div className="flex justify-between items-center  pt-6">
        <h1 className="text-gray-500 text-xl">Total</h1>
        <h1 className="text-3xl font-bold">${price}</h1>
      </div>
      <div>
        <button
          onClick={checkout}
          className="w-full bg-gradient-to-r from-[#6B2AF8] to-[#9514FA] rounded-full text-white  btn p-7 text-lg font-bold"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

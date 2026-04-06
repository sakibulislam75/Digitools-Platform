import React from "react";

const CartCard = ({ isadded }) => {
  return (
    <div>
      <h2>{isadded.name}</h2>
    </div>
  );
};

export default CartCard;

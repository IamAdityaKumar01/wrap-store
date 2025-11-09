import React, { useState } from "react";

const CartItems = (props) => {
  const { thumbnail, description, title, brand, price, discountPercentage } =
    props;
  const [quantity, setQuantity] = useState(1);

  const discountedPrice =
    price && discountPercentage
      ? price - (price * discountPercentage) / 100
      : price;

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const finalPrice = price || 0;
  const finalDiscountedPrice = discountedPrice || 0;
  const discount = discountPercentage || 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <img
            src={thumbnail || "https://via.placeholder.com/150"}
            alt={title || "Product"}
            className="w-32 h-32 object-cover rounded-md border border-gray-200"
          />
        </div>

        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              {brand && (
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                  {brand}
                </p>
              )}
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {title || "Product Title"}
              </h3>
              {description && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {description}
                </p>
              )}
            </div>

            <button
              className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors text-2xl font-bold leading-none ml-2"
              aria-label="Remove item"
            >
              ×
            </button>
          </div>

          <div className="flex justify-between items-end mt-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{finalDiscountedPrice.toFixed(2)}
                </span>
                {discount > 0 && (
                  <>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{finalPrice.toFixed(2)}
                    </span>
                    <span className="text-sm font-semibold text-green-600">
                      {discount}% off
                    </span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={handleDecrement}
                    className="px-3 py-1 hover:bg-gray-100 transition-colors text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={quantity === 1}
                  >
                    −
                  </button>
                  <span className="px-4 py-1 font-semibold border-x border-gray-300 min-w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="px-3 py-1 hover:bg-gray-100 transition-colors text-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">Subtotal</p>
              <p className="text-xl font-bold text-gray-900">
                ₹{(finalDiscountedPrice * quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const data = useSelector((store) => store.cart.items);
  console.log(data);

  if (data.length == 0) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <div className="mb-4 flex justify-center opacity-30"></div>

          <h2 className="text-2xl font-semibold text-gray-600 mb-2">
            Your cart is empty
          </h2>

          <p className="text-gray-400 text-sm">Add items to get started</p>
        </div>
      </div>
    );
  }
  return (
    <div className="cart-container">
      <div className="Items">
        {data.map((obj) => (
          <CartItems key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};
export default Cart;

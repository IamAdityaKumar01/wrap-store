import { useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((store) => store.cart.items);
  console.log(data);
  return (
    <div className="cart-container">
      <div className="Items"></div>
    </div>
  );
};
export default Cart;

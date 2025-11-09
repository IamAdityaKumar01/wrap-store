import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const Cart = () => {
  const data = useSelector((store) => store.cart.items);
  console.log(data);
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

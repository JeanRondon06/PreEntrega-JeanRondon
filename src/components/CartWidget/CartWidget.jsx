import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <BsCart3 size={30} />
      <span>0</span>
    </div>
  );
};

export default CartWidget;

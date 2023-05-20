import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <div>
        <BsCart3 size={25} style={{ display: "flex" }} />
        <span style={{ gap: "30px" }}>0</span>
      </div>
    </div>
  );
};

export default CartWidget;

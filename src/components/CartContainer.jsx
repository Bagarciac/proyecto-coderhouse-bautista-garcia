import { useContext } from "react";
import CartContext from "../context/CartContext";
import Cart from "./Cart";


function CartContainer() {
    const { cart } = useContext(CartContext);


    return (
        <Cart items={cart} />
    )
}
export default CartContainer;
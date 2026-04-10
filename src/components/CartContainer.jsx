import { useContext } from "react";
import CartContext from "../context/CartContext";
import Cart from "./Cart";


function CartContainer() {
    const { cart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center gap-4 mt-10">
                <h2 className="text-2xl font-bold">Tu carrito está vacío</h2>
                <p className="text-gray-600">Agrega productos para verlos aquí</p>
            </div>
        )
    }

    return (
        <Cart items={cart} />
    )
}
export default CartContainer;
import { Link } from "react-router";
import { useContext } from "react";
import CartContext from "../context/CartContext";



function CartWidget() {
    const context = useContext(CartContext);
    const itemsQuantity = context.getItemsQuantity();

    return (
        <div className="navbar-end">
            <Link to="/cart" className="btn">Carrito ({itemsQuantity}) </Link>
        </div>
    )
}
export default CartWidget;
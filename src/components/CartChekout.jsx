import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import CartContext from "../context/CartContext";
import CartCheckoutPrices from "./CartCheckoutPrices";
import CartEndPurchase from "./CartEndPurchase";

function CartCheckout( {items}) {
    const navigate = useNavigate();
    const { clearCart, getTotalPrice/*, endPurchase*/ } = useContext(CartContext);
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    
    const total = getTotalPrice();

    const handleClearCart = () => {
        clearCart();
    }

    // const handleEndPurchase = () => {
    //     setPurchaseCompleted(true);
    //     clearCart();
    // }

    const handleCloseModal = () => {
        setPurchaseCompleted(false);
    }

    return (
        <div className=" bg-white rounded-box shadow-md">
            <div className="overflow-x-auto">
                <table className="table">
                {/* head */}
                    <thead>
                    <tr className="text-mauve-950">
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
            
                        {items.map( item => <CartCheckoutPrices key={item.id} item={item} /> )}
                    
                </tbody>
            </table>

            </div>
            <div className="flex flex-row gap-4 justify-center">

                <h2 className="text-mauve-950">Total: ${total.toFixed(2)}</h2>

                <button className="btn bg-cyan-600"
                onClick={handleClearCart}>vaciar carrito</button>
                <button className="btn bg-cyan-600" onClick={() => navigate(`/checkout`)}>Ir a Checkout</button>
            </div>
            {purchaseCompleted && <CartEndPurchase onClose={handleCloseModal} />}

        </div>
    );
}

export default CartCheckout;
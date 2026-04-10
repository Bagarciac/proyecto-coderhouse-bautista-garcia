import Cart from "./Cart";
import item from "./Item";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import CartContext from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";
import CartEndPurchase from "./CartEndPurchase";

function Checkout() {
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate();
    

    const handleCreateOrder = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const address = form.address.value;
        const order = {
            user:{ name, phone, email, address},
            items: cart,
            time: serverTimestamp(),
            total : getTotalPrice()
        }

        createOrder(order).then( orderId => {
            clearCart();
            setOrderId(orderId);
            setPurchaseCompleted(true);
        }).catch( error => {
            alert("Error al crear la orden: " + error);
        });
    }

    const handleCloseModal = () => {
        setPurchaseCompleted(false);
        navigate('/');
    }


    

    return (
        <div className="flex justify-center mt-10">
            <form className='flex-col flex gap-3 w-1/2' onSubmit={handleCreateOrder}>
                <input type="text" placeholder="Nombre"  className="input w-full" id="name" required/>
                <input type="text" placeholder="Número de teléfono"  className="input w-full" id="phone" required/>
                <input type="email" placeholder="Email" className="input w-full" id="email" required/>
                <input type="text" placeholder="Dirección" className="input w-full" id="address" required/>
                <button className="btn bg-cyan-600" type="submit">Create Order</button>
            </form>
            {purchaseCompleted && <CartEndPurchase onClose={handleCloseModal} orderId={orderId} />}
        </div>
    )
};

export default Checkout
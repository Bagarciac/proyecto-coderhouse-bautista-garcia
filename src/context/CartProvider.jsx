import CartContext from "./CartContext";
import { useState } from "react";


function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const isIncart = (product) => {
        return cart.some((item) => item.id === product.id);
    }

    const updateCart = (product) => {
        const cartCopy = cart.map((item) => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + product.quantity };
            }
            return item;
        });
        setCart(cartCopy);
    };

    const addToCart = (product) => {
        if(!isIncart(product)) {
            setCart((prevCart) => [...prevCart, product]);
        } else {
            updateCart(product);
        }
    };


    const GetMoreItem = (product) => {
        const cartCopy = cart.map((item) => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(cartCopy);
    };

    const GetLessItem = (product) => {
        const cartCopy = cart.map((item) => {
            if (item.id === product.id) {
                const newQuantity = item.quantity - 1;
                if (newQuantity > 0) {
                    return { ...item, quantity: newQuantity };
                } else {
                    return null;
                }
            }
            return item;
        }).filter(item => item !== null);
        setCart(cartCopy);
    };


    const clearCart = () => {
        setCart([]);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    const getItemsQuantity = () => {
        return cart.reduce((cantidad, item) => cantidad + item.quantity, 0);
    } 
    
    const endPurchase = () => {
        clearCart();
    }

    

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, getItemsQuantity, GetMoreItem, GetLessItem , getTotalPrice, endPurchase }}>
            {children}
        </CartContext.Provider>
    )
}
    

   

    
export default CartProvider;
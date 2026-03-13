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
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(cartCopy);
    };


    const removeFromCart = (product) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    };

    const getItemsQuantity = () => {
        return cart.reduce((cantidad, item) => cantidad + item.quantity, 0);
    }  

    

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getItemsQuantity, GetMoreItem, GetLessItem }}>
            {children}
        </CartContext.Provider>
    )
}
    

   

    
export default CartProvider;
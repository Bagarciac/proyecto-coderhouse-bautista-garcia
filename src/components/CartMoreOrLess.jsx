import { useState, useContext } from "react";
import CartContext from "../context/CartContext";



function CartMoreOrLess( {item } ) {
    const { GetMoreItem } = useContext(CartContext);
    const { GetLessItem } = useContext(CartContext);

    const handleIncrease = () => {
        GetMoreItem(item);
    };

    const handleDecrease = () => {
        GetLessItem(item);
    };



    

    return (
        <div>
            <button className="btn btn-square btn-ghost" onClick={handleIncrease}>+</button>

            <button className="btn btn-square btn-ghost" onClick={handleDecrease}>-</button>
            
            
        </div>
    );

}

export default CartMoreOrLess;
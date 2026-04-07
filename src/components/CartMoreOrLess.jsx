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
        <div className="">
            <button className="btn btn-square btn-ghost size-15 text-xl md:text-2xl md:size-20" onClick={handleIncrease}>+</button>

            <button className="btn btn-square btn-ghost size-15 text-xl md:text-2xl md:size-20" onClick={handleDecrease}>-</button>
            
            
        </div>
    );

}

export default CartMoreOrLess;
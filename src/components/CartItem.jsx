import CartMoreOrLess from "./CartMoreOrLess";
import { useNavigate } from "react-router";


function CartItem({ item }) {
    const navigate = useNavigate();
    return (
        <div className="bg-white text-mauve-950 rounded-box m-2">
            <li className="list-row" key={item.id}>
                    <div><img className="size-20 bg-gray-100 rounded-box" src={item.thumbnail} alt={item.title} onClick={() => navigate(`/product/${item.id}`)}/></div>
                <div>
                    <div>{item.title}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">{item.quantity} x $ {item.price}</div>
                </div>

                
                <CartMoreOrLess item={item} />
        
                
            </li>
        </div>
    )
}

export default CartItem;
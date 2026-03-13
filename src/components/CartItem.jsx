import CartMoreOrLess from "./CartMoreOrLess";


function CartItem({ item, removeFromCart }) {
    return (
        <div>
            <li className="list-row" key={item.id}>
                    <div><img className="size-10 rounded-box" src={item.thumbnail} alt={item.title} /></div>
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
import CartItem from "./CartItem";
import CartCheckout from "./CartChekout";

function Cart({items}) {

    



    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <ul className="list bg-gray-300  ">
            <div className="list-cols-1">
                {items.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
                </ul>

            <div className=" bg-gray-300">
                <CartCheckout items={items} />
            </div>
        
        </div>
    )
}

export default Cart;
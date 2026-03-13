import CartItem from "./CartItem";


function Cart({items}) {

    



    return (
        <div >
            <ul className="list bg-base-100 rounded-box shadow-md">
            <div className="list-cols-1">
                {items.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
                </ul>

            <div>
                <button className="btn btn-wide">vaciar carrito</button>
                <button className="btn btn-wide">Finalizar compra</button>
            </div>
        
        </div>
    )
}

export default Cart;
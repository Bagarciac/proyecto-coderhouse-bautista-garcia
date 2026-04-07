


function CartCheckoutPrices({ item }) {

    const price = item.price * item.quantity;


    return(
        <tr className="text-mauve-950">
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>${price.toFixed(2)}</td>
        </tr>
    )
}

export default CartCheckoutPrices;
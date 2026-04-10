import { useState, useContext } from "react";
import CartContext from "../context/CartContext";

function ItemCount({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);


  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
  };

  if (item.stock === 0) {
    return <button className="btn btn-error" >Out of Stock</button>;
  }

  return (
    <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            min="1"
            max={item.stock}
          />
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ItemCount;
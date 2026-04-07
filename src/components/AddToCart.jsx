import { useState, useContext } from "react";
import CartContext from "../context/CartContext";

function AddToCart({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);


  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
  };

  return (
    <div>
      {item.stock === 0 ? (
        <button className="btn btn-error" disabled>No Stock</button>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default AddToCart;
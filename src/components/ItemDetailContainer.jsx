import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const { productId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setItem(data));
    }, [productId]);

    return(
        <ItemDetail prod={item}/>
    )
}
export default ItemDetailContainer;
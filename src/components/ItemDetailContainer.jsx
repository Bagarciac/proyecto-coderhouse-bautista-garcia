import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../firebase/db";

function ItemDetailContainer() {
    const { productId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        //fetch(`https://dummyjson.com/products/${productId}`)
        //.then(res => res.json())
        //.then(data => setItem(data));
        getProductById(productId)
        .then(detail => setItem(detail));

    }, [productId]);

    return(
        <ItemDetail prod={item}/>
    )
}
export default ItemDetailContainer;
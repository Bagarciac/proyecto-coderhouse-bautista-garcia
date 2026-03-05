import { useState } from "react"
import Itemlist from "./Itemlist"
import { useEffect } from "react"

function ItemlistContainer() {

    const [items , setItems] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setItems(data.products));

    }, [])

    return(
        <Itemlist items = {items} />
    )
}

export default ItemlistContainer;
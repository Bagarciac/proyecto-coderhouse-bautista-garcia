import { useEffect, useState } from "react";
import Itemlist from "./ItemList";
import { useParams } from "react-router";

function ItemlistContainer() {
    const { categoryId } = useParams();


    const [items , setItems] = useState([])
        const url = categoryId ? `https://dummyjson.com/products/category/${categoryId}` : 'https://dummyjson.com/products';
            useEffect(() => {
                fetch(url)
                .then(res => res.json())
                .then(data => setItems(data.products));
                
                

            }, [categoryId])

    return(
        
            
    <Itemlist items={items} />
        
        
    )
}

export default ItemlistContainer;
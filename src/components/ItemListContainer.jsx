import { useEffect, useState } from "react";
import Itemlist from "./ItemList";
import { useParams } from "react-router";
import { getProducts } from "../firebase/db";

function ItemlistContainer() {
    const { categoryId } = useParams();


    const [items , setItems] = useState([])
        //const url = categoryId ? `https://dummyjson.com/products/category/${categoryId}` : 'https://dummyjson.com/products';
           useEffect(() => {
                //fetch(url)
                //.then(res => res.json())
                //.then(data => setItems(data.products));
                
            getProducts()
            .then(prods => setItems(prods.filter(prod => prod.category === categoryId || !categoryId)))    

            }, [categoryId])

    return(
        
            
    <Itemlist items={items} />
        
        
    )
}

export default ItemlistContainer;
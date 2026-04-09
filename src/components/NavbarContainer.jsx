import { useState, useEffect }   from "react";
import Navbar from "./Navbar";
import { getCategories } from "../firebase/db";

function NavbarContainer() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //fetch('https://dummyjson.com/products/category-list')
    //.then(res => res.json())
    //.then(data => setCategories(data));
    getCategories()
    .then(cats => setCategories(cats))

  }, []);

   return(
    <Navbar categories={categories} />
   )
}

export default NavbarContainer;
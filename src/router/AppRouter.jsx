import { BrowserRouter, Routes , Route } from "react-router";
import ItemlistContainer from "../components/ItemListContainer";
import NavbarContainer from "../components/NavbarContainer";
import NotFound from "../components/NotFound";
import ItemDetailContainer from "../components/ItemDetailContainer";
import CartContainer from "../components/CartContainer";
import Checkout from "../components/Checkout";

function AppRouter() {

    return (
        <BrowserRouter>
            <NavbarContainer />
            <Routes>
                <Route path="/" element={<ItemlistContainer />} />
                <Route path="/cart" element= {<CartContainer />} />
                <Route path="/category/:categoryId" element={<ItemlistContainer />} />
                <Route path="/product/:productId" element = {<ItemDetailContainer/>}/>
                <Route path="/checkout" element = {<Checkout/>}/>
                <Route path="*" element = {<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter
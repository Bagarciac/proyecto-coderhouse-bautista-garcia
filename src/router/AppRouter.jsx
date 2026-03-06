import { BrowserRouter, Routes , Route } from "react-router";
import ItemlistContainer from "../components/ItemListContainer";
import NavbarContainer from "../components/NavbarContainer";
import Cart from "../components/Cart";

function AppRouter() {

    return (
        <BrowserRouter>
            <NavbarContainer />
            <Routes>
                <Route path="/" element={<ItemlistContainer />} />
                <Route path="/cart" element= {<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter
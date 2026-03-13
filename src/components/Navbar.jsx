import { Link } from "react-router";
import CartWidget from "./CartWidget";

function Navbar({ categories }) {


    return(
        <>
            <div className="navbar bg-cyan-600 shadow-sm mb-3">
            <div className="navbar-start">
            <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a>Categorias</a>
          <ul className="p-2 grid grid-cols-1 gap-2">
            {categories.map( cat => <li key={cat}><Link to={`/category/${cat}`}>{cat}</Link></li> )}
          </ul>
        </li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">TankShop</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Categorias</summary>
          <ul className="p-2 bg-base-100 w-96 z-1 grid grid-cols-2 gap-2">
              {categories.map( cat => <li key={cat}><Link to={`/category/${cat}`}>{cat}</Link></li> )}
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
  <CartWidget />
</div>
    </>
    )
}
export default Navbar;
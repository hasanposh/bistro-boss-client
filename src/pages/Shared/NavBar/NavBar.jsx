import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { MdShoppingCart } from "react-icons/md";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, signOutUser } = useAuth();
  const [cart] = useCart()
  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order Food</NavLink>
      </li>
      <li>
        <NavLink to={"/seccet"}>Seccet</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/cart"}>
          <button className="btn">
          <MdShoppingCart />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
      {user ? (
        <>
          <li>{user.displayName}</li>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-black bg-opacity-60 text-white max-w-screen-xl fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex flex-col">
            <a className=" text-xl">BISTRO BOSS</a>
            <a className=" text-lg">Restaurent</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

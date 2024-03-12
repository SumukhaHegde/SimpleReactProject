import { Link } from "react-router-dom";
import { CDN_Logo } from "../utils/constants";
import { Link } from "react-router-dom";

export const LeftTreePane = () => (
  <div className="flex">
    <div id="company-logo">
      <img className="w-24 m-10" src={CDN_Logo} />
    </div>
    <div className="my-auto w-full">
      <ul className="flex w-12/12 justify-evenly">
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  </div>
);

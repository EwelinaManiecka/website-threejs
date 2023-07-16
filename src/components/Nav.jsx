import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

function Nav() {
  const links = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "Tv & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];
  const listLinks = links.map((link) => (
    <li>
      <a className="link-styled">{link}</a>
    </li>
  ));

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
          <li>
            <a className="link-styled">Store</a>
          </li>
          {listLinks}
          <li>
            <img src={Search} alt="Search" />
          </li>
          <li>
            <img src={Store} alt="Store" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

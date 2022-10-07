import React from "react";
import { UilSignin } from '@iconscout/react-unicons'
import { UilUserPlus } from '@iconscout/react-unicons'
import { UilShoppingCartAlt } from '@iconscout/react-unicons'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
      <a className="navbar-brand fw-bold fs-4 mx-2" href="#">
        HW COLLECTIONS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mx-auto">
          <li className="nav-item active">
            <a className="nav-link fs-5" href="#">
              Home{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5" href="#">
              Products
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fs-5" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5" href="#">
              Contact
            </a>
          </li>
        </ul>
        <div className="buttons mx-4">
          <a href="" className=" fs-5 btn btn-outline-dark ms-2">
          <UilSignin size="30" color="black" />Login
          </a>
          <a href="" className=" fs-5 btn btn-outline-dark ms-2">
          <UilUserPlus size="30" color="black" />Register
          </a>
          <a href="" className=" fs-5 btn btn-outline-dark ms-2">
          <UilShoppingCartAlt size="30" color="black" /> Cart(0)
          </a>
        </div>
      </div>
    </nav>





  );
}

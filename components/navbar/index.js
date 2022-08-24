import React from "react";
import Link from "next/link";
import navstyle from "./navbar.module.css";
import useAuth from "../../hook/useAuth";

export default function Navbar() {
  const logo = `https://i.ibb.co/StVKHKz/A-removebg-preview.png`;

  const { logingWithGoogle, user, logOut } = useAuth();
  console.log(user);
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-5">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <a>
            <img src={logo} alt="" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-uppercase d-flex align-items-center  ms-auto mb-2 mb-lg-0 middle-part ">
            <li className={navstyle.navitem}>
              <Link href="/">
                <a
                  className={["nav-link active", navstyle.navtextcolor].join(
                    " "
                  )}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/about">
                <a className={["nav-link", navstyle.navtextcolor].join(" ")}>
                  My About
                </a>
              </Link>
            </li>

            <li className="nav-item ">
              <Link href="/project">
                <a className={["nav-link", navstyle.navtextcolor].join(" ")}>
                  Project
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/contact">
                <a className={["nav-link", navstyle.navtextcolor].join(" ")}>
                  Contact
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <button
                className="btn btn-success"
                onClick={() => logingWithGoogle()}
              >
                Login
              </button>
            </li>
            <li className="nav-item ">
              <button className="btn btn-danger ms-2" onClick={() => logOut()}>
                LogOut
              </button>
            </li>

            {/* <li className={navstyle.navitem}>
              <Link className="nav-link" href="/addservices">
                Add service and register list
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <nav>
      <div className="nav-bar">
        <div className="logo-menu">
          <div className="drawer">
            <FiMenu
              color="#FFF"
              size={20}
              // onClick={OpenDrawer}
              className="drawer-menu"
            />
          </div>
          {/* Menu  */}
          <div className="main-nav-menu">
            <ul>
              {/* <li className="sub-menu-parent li-drawer">
                <div className="drawer">
                  <FiMenu
                    color="#FFF"
                    size={20}
                    // onClick={OpenDrawer}
                    className="drawer-menu"
                  />
                </div>
              </li> */}
              <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <a href="/">Home</a>
                </div>
              </li>
              <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <a href="#portfolio-about">About</a>
                </div>
              </li>

              <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <a href="#portfolio-services">Services</a>
                </div>
              </li>
              <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <a href="#portfolio-projects">Portfolio</a>
                </div>
              </li>
              <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <a href="/">Blog</a>
                </div>
              </li>
              <li className="sub-menu-parent">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <a href="#portfolio-contact">Contact</a>
                </div>
              </li>
            </ul>
          </div>
          {/* Menu  */}
        </div>
      </div>
    </nav>
  );
}

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsActive(!isActive); // Toggle search box visibility
  };

  return (
    <>
      <div>
        {/*header section start*/}
        <header className="vr5-header-section sticky-header">
          <div className="container-1700 position-relative">
            <div className="row align-items-center">
              <div className="col-xl-3 col-5">
                <div className="logo-wrapper">
                  <a href="index.html">
                    <img
                      src="assets/images/logo-white.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <nav className="header-navigation text-center text-xl-start vr5-header-navigation">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-3 col-7">
                <div className="header-right vr5-header-right d-flex align-items-center justify-content-end">
                  <div className="header-icons d-inline-flex align-items-center gap-prt-16 gap-32">
                    <div className={`header-search `} id="header-search">
                      <button
                        type="button"
                        className="header-search-btn"
                        onClick={handleSearchToggle}
                      >
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.2049 12.952L18 16.7462L16.7462 18L12.952 14.2049C11.5402 15.3366 9.78419 15.9522 7.9748 15.9496C3.57271 15.9496 0 12.3769 0 7.9748C0 3.57271 3.57271 0 7.9748 0C12.3769 0 15.9496 3.57271 15.9496 7.9748C15.9522 9.78419 15.3366 11.5402 14.2049 12.952ZM12.4274 12.2945C13.5519 11.138 14.18 9.58786 14.1774 7.9748C14.1774 4.54741 11.4013 1.77218 7.9748 1.77218C4.54741 1.77218 1.77218 4.54741 1.77218 7.9748C1.77218 11.4013 4.54741 14.1774 7.9748 14.1774C9.58786 14.18 11.138 13.5519 12.2945 12.4274L12.4274 12.2945V12.2945Z"
                            fill="#121111"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="header-cart">
                      <Link to="/cart">
                        <span className="cart-icon">
                          <svg
                            width={21}
                            height={21}
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.7188 14V2H20.7188V0H17.7188C17.4535 0 17.1992 0.105357 17.0116 0.292893C16.8241 0.48043 16.7188 0.734784 16.7188 1V13H4.28075L2.28075 5H14.7188V3H0.998751C0.846745 3 0.696739 3.03466 0.560137 3.10134C0.423535 3.16801 0.303931 3.26495 0.210415 3.38479C0.116899 3.50462 0.0519333 3.6442 0.0204544 3.79291C-0.0110245 3.94162 -0.00818793 4.09555 0.0287495 4.243L2.52875 14.243C2.58292 14.4592 2.7078 14.6512 2.88354 14.7883C3.05929 14.9255 3.27582 15 3.49875 15H17.7188C17.984 15 18.2383 14.8946 18.4259 14.7071C18.6134 14.5196 18.7188 14.2652 18.7188 14V14ZM16.7188 21C17.2492 21 17.7579 20.7893 18.133 20.4142C18.508 20.0391 18.7188 19.5304 18.7188 19C18.7188 18.4696 18.508 17.9609 18.133 17.5858C17.7579 17.2107 17.2492 17 16.7188 17C16.1883 17 15.6796 17.2107 15.3045 17.5858C14.9295 17.9609 14.7188 18.4696 14.7188 19C14.7188 19.5304 14.9295 20.0391 15.3045 20.4142C15.6796 20.7893 16.1883 21 16.7188 21ZM4.71875 21C5.24918 21 5.75789 20.7893 6.13296 20.4142C6.50804 20.0391 6.71875 19.5304 6.71875 19C6.71875 18.4696 6.50804 17.9609 6.13296 17.5858C5.75789 17.2107 5.24918 17 4.71875 17C4.18832 17 3.67961 17.2107 3.30454 17.5858C2.92946 17.9609 2.71875 18.4696 2.71875 19C2.71875 19.5304 2.92946 20.0391 3.30454 20.4142C3.67961 20.7893 4.18832 21 4.71875 21Z"
                              fill="#121111"
                            />
                          </svg>
                          {/* <sub className="cart-item">2</sub> */}
                        </span>
                        {/* <span className="cart-amount fw-medium text-white ms-3 d-none d-xl-inline-block">
                        $225.00
                      </span> */}
                      </Link>
                    </div>
                  </div>
                  <div className="header-toggle">
                    <button className="header-toggle-btn offcanvus-toggle d-none d-xl-block">
                      <span />
                      <span />
                      <span />
                    </button>
                    {/* Toggle Button */}
                    <button
                      className="header-toggle-btn mobile-menu-toggle d-xl-none"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*header section end*/}
        {/*header serch box start*/}

        <div className={`header-search-box ${isActive ? "active" : ""}`}>
          <form action="#">
            <label className="position-relative">
              <i className="fas fa-magnifying-glass" />
              <input type="text" placeholder="Search here...." />
            </label>
          </form>
          <a href="#" className="search-close">
            <i className="fa-solid fa-xmark" onClick={handleSearchToggle} />
          </a>
        </div>

        {/*header search box end*/}

        {/*mobile menu start*/}
        <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
          <div className="close" onClick={() => setIsOpen(!isOpen)}>
            <i className="fas fa-xmark" />
          </div>
          <a href="#" className="logo py-3">
            <img
              src="assets/images/logo.png"
              alt="logo"
              className="img-fluid"
            />
          </a>
          <ul className="mobile-nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/*mobile menu end*/}
      </div>
    </>
  );
}

export default Header;

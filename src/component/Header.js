"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/img/REG.svg";
import menu_icon from "../../public/img/menu-icon.svg";
import close_icon from "../../public/img/close-icon.svg";
import search_icon from "../../public/img/serach-icon.svg";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    if (menuOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="menu-icon" onClick={handleMenuToggle}>
            <Image src={menu_icon} alt="menu_icon" />
          </div>
          <div className={`side-menu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link href="/" aria-label="home">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" aria-label="aboutUs">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/acquisition_profile"
                  aria-label="acquisition_profile"
                >
                  ACQUISITION PROFILE
                </Link>
              </li>

              <li>
                <Link href="/contact" aria-label="contact">
                  CONTACT
                </Link>
              </li>
            </ul>
            <div className="close-icon" onClick={handleMenuToggle}>
              <Image src={close_icon} alt="close-icon" />
            </div>
          </div>
          <div className="logo">
            <Link href="/" aria-label="Logo">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="search">
            <Image src={search_icon} alt="search-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

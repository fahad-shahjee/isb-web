import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import logoLight from "public/images/logo-light.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";
  const combinedClasses = `${scrolled ? "navbar-active" : ""} ${defaultClasses}`;

  const router = useRouter();
  const logoSrc = router.pathname === "/index-two-light" ? logoLight : logo;

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  {/* Logo */}
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logoSrc} priority alt="Logo" />
                    </Link>
                  </div>

                  {/* Menu */}
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item nav-fade">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <Link href="/our-services" className="navbar__dropdown-label">
                          Services
                        </Link>
                        <ul className="navbar__sub-menu">
                          <li><Link href="/">Logo Design</Link></li>
                          <li><Link href="/">Mobile Application</Link></li>
                          <li><Link href="/">Ecommerce Solution</Link></li>
                          <li><Link href="/">Website Development</Link></li>
                          <li><Link href="/">Software Development</Link></li>
                          <li><Link href="/">Animation</Link></li>
                          <li><Link href="/">Digital Marketing</Link></li>
                          <li><Link href="/">Business Branding</Link></li>
                        </ul>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="/">Packages</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Right Side Options */}
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      {/* "Let's Talk" button linked to Our Services */}
                      <Link href="/our-services" className="btn btn--secondary">
                        Let&apos;s Talk
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;

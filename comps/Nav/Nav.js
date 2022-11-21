import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../layout/Layout";
import styles from "./Nav.module.css";
import Logo from "../logo/Logo";
import NierLogo from "../../public/icons/nierlogo.png";
import Phone from "../../public/icons/phone.svg";
import Email from "../../public/icons/email.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (window.innerWidth <= 768 && isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <Layout>
      <header className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <Logo src={NierLogo} />
          </div>
          <div className={styles.navMiddle}>
            <ul
              className={
                isOpen === false
                  ? styles.navMenu
                  : styles.navMenu + " " + styles.active
              }
            >
              {isOpen === true && (
                <li className={styles.navItem}>
                  <Logo />
                </li>
              )}
              <li>
                <Link href='/'>
                  <a className={styles.navItem}>Services</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className={styles.navItem}>About</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className={styles.navItem}>Fleet</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className={styles.navItem}>Contact</a>
                </Link>
              </li>
              {isOpen === true && (
                <>
                  <li>
                    <Link href='/' className={styles.navItem}>
                      <span>
                        <Phone className={styles.icon2} />
                        <p>480-529-1398</p>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href='/' className={styles.navItem}>
                      <span>
                        <Email className={styles.icon2} />
                        <p>Balanier54@msn.com</p>
                      </span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className={styles.navRight}>
            <Phone className={styles.icon} />
            <Email className={styles.icon} />
          </div>
          <span
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </span>
        </nav>
      </header>
    </Layout>
  );
};
export default Nav;

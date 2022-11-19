import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../layout/Layout";
import styles from "./Nav.module.css";
import Logo from "../logo/Logo";
import Phone from "../../public/icons/phone.svg";
import Email from "../../public/icons/email.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      <header className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <Logo />
          </div>
          <div className={styles.navMiddle}>
            <ul
              className={
                isOpen === false
                  ? styles.navMenu
                  : styles.navMenu + " " + styles.active
              }
            >
              <li>
                <Link href='/' className={styles.navItem}>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/' className={styles.navItem}>
                  About
                </Link>
              </li>
              <li>
                <Link href='/' className={styles.navItem}>
                  Fleet
                </Link>
              </li>
              <li>
                <Link href='/' className={styles.navItem}>
                  Contact
                </Link>
              </li>
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

import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../layout/Layout";
import styles from "./Nav.module.css";
import Logo from "../logo/Logo";
import Phone from '../../public/icons/phone.svg'

const Nav = () => {
  return (
    <Layout>
      <header className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <Logo />
          </div>
          <div className={styles.navMiddle}>
            <ul className={styles.navMenu}>
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
          </div>
        </nav>
      </header>
    </Layout>
  );
};
export default Nav;

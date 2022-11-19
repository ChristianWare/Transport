import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../layout/Layout";
import styles from "./Nav.module.css";
import Logo from "../logo/Logo";

const Nav = () => {
  return (
    <Layout>
      <header className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <Logo />
          </div>
          <div className={styles.navRight}>
            <ul className={styles.navMenu}>
              <li className={styles.navItem}>
                <Link href='/'>
                  Services
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href='/'>
                  About
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href='/'>
                  Fleet
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href='/'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Layout>
  );
};
export default Nav;

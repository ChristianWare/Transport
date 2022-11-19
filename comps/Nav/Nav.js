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
          <div className={styles.navRight}>Nav Links Here</div>
        </nav>
      </header>
    </Layout>
  );
};
export default Nav;

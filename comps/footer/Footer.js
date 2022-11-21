import Layout from "../layout/Layout";
import styles from "./Footer.module.css";
import Link from "next/link";
import Logo from "../logo/Logo";
import WhiteLogo from '../../public/icons/logowhite.png'

const Footer = () => {
  return (
    <div className={styles.bgColor}>
      <Layout>
        <section className={styles.footerContainer}>
          <footer className={styles.footerBottom}>
            <div className={styles.footerContent}>
              <div className={styles.footerLeft}>
                <Logo src={WhiteLogo} />
                <p lang='en' className={styles.copy}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  eligendi in error officia distinctio! Minima, ducimus maiores
                  blanditiis quia eveniet sit alias numquam, laudantium, debitis
                  totam sint libero nam unde?
                </p>
                <div className={styles.sci}></div>
              </div>
              <div className={styles.footerRight}>
                <div className={styles.list1}>
                  <h3 className={styles.heading}>Services</h3>
                  <ul>
                    <li>AIRPORT</li>
                    <li>CHAUFFEUR</li>
                    <li>EVENTS</li>
                    <li>DISTANCE</li>
                  </ul>
                </div>
                <div className={styles.list2}>
                  <h3 className={styles.heading}>About</h3>
                  <ul>
                    <li>24/7</li>
                    <li>LUXURY</li>
                    <li>BUSINESS</li>
                    <li>BOOKING</li>
                  </ul>
                </div>
                <div className={styles.list3}>
                  <h3 className={styles.heading}>Contact</h3>
                  <ul>
                    <li>480-529-1398</li>
                    <li>balanier54@msn.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className={styles.copyrightContainer}>
              <small>
                Nier Transportation {new Date().getFullYear()} &copy; - All
                Rights Reserved || Phoeniz, AZ
              </small>
            </div>
          </footer>
        </section>
      </Layout>
    </div>
  );
};
export default Footer;

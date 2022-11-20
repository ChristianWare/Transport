import Layout from "../layout/Layout";
import styles from "./Hero.module.css";
import Image from "next/image";
import Car from "../../public/images/sub.webp";

const Hero = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              Providing A Professional & Reliable Service
            </h1>
            <p className={styles.copy}>
              <span>//</span>We'll get you to where you need to go!
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Car} layout='responsive' objectFit='cover' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Hero;

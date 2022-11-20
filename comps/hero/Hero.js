import Layout from "../layout/Layout";
import styles from "./Hero.module.css";
import Image from "next/image";
import Car from "../../public/images/sub.webp";
import Button from "../button/Button";
import Nav from "../Nav/Nav";

const Hero = () => {
  return (
    <div className={styles.bgColor}>
      <Layout>
      <Nav />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}>
                Reliable & Professional Transportation Services
              </h1>
              <p className={styles.copy}>
                <span>//</span>We'll get you to where you need to go!
              </p>
              <div className={styles.btnContainer}>
                <Button text='Book Now' btnType='primary' />
                <Button text='Contact Us' btnType='secondary' />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={Car} layout='responsive' objectFit='cover' />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Hero;

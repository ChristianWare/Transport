import Layout from "../layout/Layout";
import styles from "./Hero.module.css";
import Image from "next/image";
import Car from "../../public/images/sub.webp";
import Button from "../button/Button";
import Nav from "../Nav/Nav";

const Hero = () => {
  return (
    <>
      <div className={styles.bgColor}>
        <Nav />
        <Layout>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.left}>
                <h1 className={styles.title}>
                  Reliable & Professional Transportation Services
                </h1>
                <p className={styles.copy} lang='en'>
                  Need reliable transportation services? Look no
                  further than Nier Transportation. We offer a wide range of
                  transportation options to meet all of your transportation
                  needs. 
                </p>
                <div className={styles.btnContainer}>
                  <Button
                    text='Book Now'
                    btnType='primary'
                    href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
                    target='blank'
                  />
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
    </>
  );
};
export default Hero;

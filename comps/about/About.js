import Layout from "../layout/Layout";
import styles from "./About.module.css";
import Image from "next/image";
import Img from '../../public/images/about.jpg'
import Clock from '../../public/icons/clock.svg'
import Car from '../../public/icons/car.svg'
import App from '../../public/icons/app.svg'


const About = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.copy}>
            <span className={styles.accent}>//</span>who we are
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image
                  src={Img}
                  layout='responsive'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.right}>
              <h6>How We Can Help</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                hic quo, nemo vel eaque nesciunt porro ullam nobis, sequi quos
                ipsa expedita eius id fuga excepturi adipisci neque totam eos
                nihil consequatur obcaecati. Quisquam error deserunt rem
                laborum, quo laudantium eligendi vitae soluta quasi quia illo
                officia nam enim repellat animi totam. Excepturi deserunt, sunt
                ratione tenetur error porro iusto explicabo sequi sed soluta
                asperiores quaerat, quisquam laudantium corrupti dolore earum
                molestias nam aut? Consequuntur.
              </p>
              <div className={styles.featuresContainer}>
                <div className={styles.feature}>
                  <Clock className={styles.icon} />
                  <p>24/7 AVAILABILITY</p>
                </div>
                <div className={styles.feature}>
                  <Car className={styles.icon} />
                  <p>LUXURY / BUSINESS</p>
                </div>
                <div className={styles.feature}>
                  <App className={styles.icon} />
                  <p>ONLINE BOOKING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

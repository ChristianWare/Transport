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
              <p className={styles.description} lang='en'>
                At Nier Transportation, we pride ourselves on providing safe,
                efficient, and affordable transportation for individuals and
                groups alike. With years of experience in the industry, our team
                of skilled drivers and dispatchers work tirelessly to ensure
                that every trip is a success. We offer a wide range of
                transportation options, including buses, vans, and cars, and are
                dedicated to meeting the unique needs of each and every client.
                Whether you need transportation for a special event, a corporate
                function, or a daily commute, we've got you covered. Contact us
                today to learn more about our services and how we can help you
                get where you need to go.
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

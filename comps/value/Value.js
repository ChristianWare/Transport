import Layout from "../layout/Layout";
import styles from "./Value.module.css";
import Image from "next/image";
import Img from "../../public/images/road2.jpg";

const Value = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.title}>Best in the Business</h2>
          <p className={styles.copy}>
            <span className={styles.accent}>//</span>Your Trustworthy & Reliable
            Transportation Experts
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
              <h6>Our Promise To You</h6>
              <p className={styles.description} lang='en'>
                At Nier Transportation, we understand that reliable and
                efficient transportation is essential for both individuals and
                businesses. That's why we are committed to providing the best
                transportation service in the industry. Our team of experienced
                drivers and dispatchers work tirelessly to ensure that every
                trip is a success, and that our customers are satisfied with the
                service they receive. We use the latest technology to track our
                vehicles in real-time and make sure that they are always on
                schedule. Trust us to provide you with the best
                transportation service possible. Contact us today to learn more
                and schedule your transportation services.
              </p>
              <div className={styles.featuresContainer}>
                <div className={styles.feature}>
                  <h4>20</h4>
                  <p>Years Serving The Valley</p>
                </div>
                <div className={styles.feature}>
                  <h4>500</h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Value;

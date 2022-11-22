import styles from "./Fleet.module.css";
import Layout from "../layout/Layout";
import ServiceCard from "../serviceCard/ServiceCard";
import Lux from "../../public/images/lux.jpeg";
import Cargo from "../../public/images/cargo.png";
import Interior from "../../public/images/interior.webp";
import Seven from "../../public/images/seven.jpeg";

const Fleet = () => {
  return (
    <div className={styles.bgColor}>
      <Layout>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.title}>Our Vehicles</h2>
            <p className={styles.copy}>
              <span className={styles.accent}>//</span>What We Drive
            </p>
            <h6 className={styles.copy2}>
              All of our vechiles come equipped with the following:
            </h6>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomTop}>
              <ServiceCard src={Lux} title='Smooth Ride' />
              <ServiceCard src={Cargo} title='Large Cargo' />
              <ServiceCard src={Interior} title='All Comforts' />
              <ServiceCard src={Seven} title='7 Seater' />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Fleet;

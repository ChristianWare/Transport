import Layout from "../layout/Layout";
import styles from "./Services.module.css";
import ServiceCard from "../serviceCard/ServiceCard";
import Driver from "../../public/images/driver.webp";
import Event from "../../public/images/event.jpg";
import Plane from "../../public/images/plane.jpg";
import Road from "../../public/images/road.jpg";

const Service = () => {
  return (
    <div className={styles.bgColor}>
      <Layout>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.title}>Our Services</h2>
            <p className={styles.copy}>
              <span>//</span>What we do
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomTop}>
              <ServiceCard src={Plane} title='Airport Transfers' />
              <ServiceCard src={Driver} title='Chauffeur' />
              <ServiceCard src={Event} title='Special Events' />
              <ServiceCard src={Road} title='Long Distance' />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Service;

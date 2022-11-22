import Layout from "../layout/Layout";
import styles from "./Services.module.css";
import ServiceCard from "../serviceCard/ServiceCard";
import Driver from "../../public/images/driver.webp";
import Event from "../../public/images/event.jpg";
import Plane from "../../public/images/plane.jpg";
import Road from "../../public/images/road.jpg";
import Corp from "../../public/images/corp.jpg";
import Travel from "../../public/images/travel.jpg";

const Service = () => {
  return (
    <div className={styles.bgColor}>
      <Layout>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.title}>Our Services</h2>
            <p className={styles.copy}>
              <span className={styles.accent}>//</span>What we do
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomTop}>
              <ServiceCard src={Plane} title='Airport Transfers' />
              <ServiceCard src={Driver} title='Chauffeur' />
              <ServiceCard src={Event} title='Special Events' />
              <ServiceCard src={Road} title='Long Distance' />
              <ServiceCard src={Corp} title='Corporate Accounts' />
              <ServiceCard src={Travel} title='Business Travel Experts' />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Service;

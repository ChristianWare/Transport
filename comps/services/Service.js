import Layout from "../layout/Layout";
import styles from "./Services.module.css";
import Image from "next/image";
import ServiceCard from "../serviceCard/ServiceCard";

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
              <ServiceCard />
              <ServiceCard />
            </div>
            <div className={styles.bottomBottom}>
              <ServiceCard />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Service;

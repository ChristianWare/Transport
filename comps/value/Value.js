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
            <span className={styles.accent}>//</span>Your Trustworth & Reliable
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

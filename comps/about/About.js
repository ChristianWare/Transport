import Layout from "../layout/Layout";
import styles from "./About.module.css";
import Image from "next/image";

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
          <div className={styles.left}>IMG Here</div>
          <div className={styles.right}>
            <h6>How We Can Help</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              dignissimos odio ipsam fugiat ea id, pariatur fugit adipisci hic
              dolores veniam voluptate accusamus esse autem, ad atque ipsum
              eaque excepturi. Omnis adipisci fugit et similique ut cumque,
              suscipit impedit dolor.
            </p>
            <div className={styles.featuresContainer}></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

import Layout from "../layout/Layout";
import styles from "./PreFooter.module.css";
import Image from "next/image";
import Car from "../../public/images/sub2.png";
import Button from "../button/Button";

const PreFooter = () => {
  return (
    <div className={styles.bgColor}>
      <Layout>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Car} className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>SCHEDULE YOUR NEXT RIDE WITH US!</h2>

            <div className={styles.btnContainer}>
              <Button
                text='Book Now'
                btnType='white'
                href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
                target='blank'
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default PreFooter;

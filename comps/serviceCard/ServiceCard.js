import styles from "./ServiceCard.module.css";
import Image from "next/image";

const ServiceCard = ({ src, title }) => {
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={src}
            height={500}
            width={700}
            layout='responsive'
            objectFit='cover'
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h6 className={styles.title}>{title}</h6>
      </div>
    </div>
  );
};
export default ServiceCard;

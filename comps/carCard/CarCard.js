import styles from "./CarCard.module.css";
import Image from "next/image";

const CarCard = (src, feature) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {src && (
            <Image
              src={src}
              width='100'
              height='300'
              layout='responsive'
              objectFit='cover'
              className={styles.img}
            />
          )}
        </div>
      </div>
      <div className={styles.bottom}>
        <h5>{feature}</h5>
        {/* <p>{copy}</p> */}
      </div>
    </div>
  );
};
export default CarCard;

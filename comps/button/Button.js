import Link from "next/link";
import styles from "./Button.module.css";

function Button({
  text,
  href = "",
  btnType = "primary",
}) {
  return (
    <Link href={href} legacyBehavior>
      <a className={styles.container}>
        <button className={styles[btnType]}>{text}</button>
      </a>
    </Link>
  );
}

export default Button;

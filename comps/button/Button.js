import Link from "next/link";
import styles from "./Button.module.css";

function Button({ text, href = "", btnType = "primary", target =''}) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`${styles.container} ${styles.tblank} ${styles[btnType]}`}
        target={target}
      >
        {text}
      </a>
    </Link>
  );
}

export default Button;

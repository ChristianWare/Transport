import styles from "./Layout.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nier Transportation</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  );
};
export default Layout;

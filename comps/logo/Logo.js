import styles from './Logo.module.css'
import Image from 'next/image'
import NierLogo from '../../public/icons/nierlogo.png'

const Logo = ({src}) => {
  return (
    <div className={styles.container}>
      <Image src={src} width='138' height='65' />
    </div>
  );
}
export default Logo
import styles from './ServiceCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            image
        </div>
        <div className={styles.right}>
            <h6>title</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequuntur sed quaerat fuga quod deserunt?</p>
        </div>
    </div>
  )
}
export default ServiceCard
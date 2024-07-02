import Image from "next/image";
import ReturnIcon from "./svg/ReturnIcon";
import styles from './HeaderTop.module.css'
const Index = () => {
    return (
        <section className={styles['header-top']}>
            <div className={styles['empty']}></div>
            <button className={styles['header-top__button']}>
                <img src={"/deliveryIcon.svg"} className={styles['header-top__svg']} alt={''}></img>
                <span className={styles['header-service__span']}>Free Delivery Over $99*</span>
            </button>
            <button className={styles['header-top__button']}>
                <img src={"/freeClickIcon.svg"} className={styles["header-top__svg"]} alt={''}></img>
                {/*<FreeClickIcon/>*/}
                <span className={styles['header-service__span']}>Free Click & Collect</span>
            </button>
            <button className={styles['header-top__button']}>
                <ReturnIcon/>
                <span className={styles['header-service__span']}>30-Day Returns</span>
            </button>
            <div className={styles['empty']}></div>
        </section>
    )
}

export default Index
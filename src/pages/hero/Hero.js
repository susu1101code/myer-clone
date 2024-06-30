import styles from './Hero.module.css'
import HeroLeft from "@/pages/hero/HeroLeft";
import HeroRight from "@/pages/hero/HeroRight";

const Hero = () => {
    return (
        <section className={"hero"}>
            <p className={styles["hero-promotion__top"]}>STOCKTAKE SALE ON NOW</p>
            <section className={styles["hero-promotion__main"]}>
                <HeroLeft/>
                <HeroRight/>
            </section>
        </section>
    )
}

export default Hero
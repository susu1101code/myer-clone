import styles from "./Hero.module.css";

const HeroLeft = () => {
  return (
      <section className={styles["hero-promotion__left"]}>
          <div className={styles["hero-promotion__left-top"]}>Stocktake
              <div className={styles["hero-promotion__beauty"]}></div>
              <div className={styles["hero-promotion__beauty"]}></div>
          </div>
          <div className={styles["hero-promotion__left-bottom"]}>Sale
              <div className={styles["hero-promotion__beauty"]}></div>
              <div className={styles["hero-promotion__beauty"]}></div>
          </div>

      </section>
  )
}

export default HeroLeft
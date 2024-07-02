import styles from "./Hero.module.css";

const HeroRight = () => {
  return (
      <div className={styles["hero-promotion__right"]}>
          <p>UP TO 50%<span className={styles["hero-promotion__right-off"]}>OFF</span></p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p>A range of women's, men's and kids' fashion and homewares</p>
          <button type="button" className={styles["hero-promotion__button"]}>SHOP NOW</button>
      </div>
  )
}

export default HeroRight
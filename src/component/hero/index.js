import styles from "./Hero.module.css";
import HeroLeft from "@/component/hero/HeroLeft";
import HeroRight from "@/component/hero/HeroRight";

const Index = () => {
  return (
    <section className={"hero"}>
      <p className={styles["hero-promotion__top"]}>STOCKTAKE SALE ON NOW</p>
      <section className={styles["hero-promotion__main"]}>
        <HeroLeft />
        <HeroRight />
      </section>
    </section>
  );
};

export default Index;

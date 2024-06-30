import styles from './TopSales.module.css'
import TopSalesItem from "@/pages/topsales/TopSalesItem";
const TopSales = () => {
  return (
      <section className={styles["top-sales"]}>
          <h2 className={styles["top-sales__title"]}>Top Sale Picks For You</h2>
          <div className={styles["top-sales__list"]}>
              <button className={styles["top-sales__button-left"]}>
                  &lt;
              </button>

              <div className={styles["top-sales__item-list"]}>
                  <TopSalesItem/>
                  <TopSalesItem/>
                  <TopSalesItem/>
                  <TopSalesItem/>
                  <TopSalesItem/>
                  <TopSalesItem/>
              </div>
              <button className={styles["top-sales__button-right"]}>
                  &gt;
              </button>
          </div>
      </section>
  )
}

export default TopSales
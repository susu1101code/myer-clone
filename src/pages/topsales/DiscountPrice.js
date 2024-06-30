import styles from "@/pages/topsales/TopSales.module.css";

const DiscountPrice = () => {
  return (
      <section>
          <div className={styles["top-sales__item-price-old"]}>
              <span>$</span>
              <span
                  className={styles["top-sales__item-price-old-number"]}>100</span>
          </div>

          <div className={styles["top-sales__item-price-new"]}>
              <span>$</span>
              <span
                  className={styles["top-sales__item-price-new-number"]}>50</span>
          </div>
      </section>
  )
}

export default DiscountPrice
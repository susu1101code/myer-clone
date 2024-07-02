import styles from "./TopSales.module.css";

const DiscountPrice = ({originPrice, price}) => {
  return (
      <section>
          <div className={styles["top-sales__item-price-old"]}>
              <span>$</span>
              <span
                  className={styles["top-sales__item-price-old-number"]}>{originPrice}</span>
          </div>

          <div className={styles["top-sales__item-price-new"]}>
              <span>$</span>
              <span
                  className={styles["top-sales__item-price-new-number"]}>{price}</span>
          </div>
      </section>
  )
}

export default DiscountPrice
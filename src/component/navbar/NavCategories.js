import styles from './Navbar.module.css'
const NavCategories = () => {
  return (
      <div className={styles["navbar-categories"]}>
          <button className={styles["navbar-categories__button"]}>Stocktake Sale</button>
          <button className={styles["navbar-categories__button"]}>Women</button>
          <button className={styles["navbar-categories__button"]}>Men</button>
          <button className={styles["navbar-categories__button"]}>Beauty</button>
          <button className={styles["navbar-categories__button"]}>Home</button>
          <button className={styles["navbar-categories__button"]}>Travel & Tech</button>
          <button className={styles["navbar-categories__button"]}>Kids</button>
          <button className={styles["navbar-categories__button"]}>Toys</button>
          <button className={styles["navbar-categories__button"]}>Gifts</button>
          <button className={styles["navbar-categories__button"]}>Clearance</button>
          <button className={styles["navbar-categories__button"]}>MYER one</button>
      </div>
  )
}

export default NavCategories
import styles from '../Navbar.module.css'
import Hamburger from "@images/hamburger.svg";


const Index = () => {
  return (
      <div className={styles["search-small"]}>
          <button>
              <img src={'/hamburger.svg'} alt={''}></img>
          </button>
          <input className={styles["navbar-search__input"]} type="text" name="search"
                 placeholder="Search for product or brand"/>
          <img src={'/submit.svg'} className={styles["navbar-search--submit"]} alt={''}></img>
      </div>
  )
}

export default Index
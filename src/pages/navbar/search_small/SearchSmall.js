import styles from '../Navbar.module.css'
import Hamburger from "@/pages/navbar/svg/Hamburger";
import Submit from "@/pages/navbar/svg/Submit";

const SearchSmall = () => {
  return (
      <div className={styles["search-small"]}>
          <button>
              <Hamburger/>
          </button>
          <input className={styles["navbar-search__input"]} type="text" name="search"
                 placeholder="Search for product or brand"/>
          <Submit/>
      </div>
  )
}

export default SearchSmall
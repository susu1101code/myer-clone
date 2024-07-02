import styles from './Navbar.module.css'

const Index = () => {
    return (
        <nav className={styles["navbar"]}>
            <img src={"/logo.svg"} className={styles["navbar-logo"]} alt={''}></img>
            <div className={styles["search"]}>
                <input className={styles["navbar-search__input"]} type="text" name="search"
                       placeholder="Search for product or brand"/>
                <img src={'/submit.svg'} className={styles["navbar-search--submit"]} alt={''}></img>
            </div>
            <ul className={styles["navbar-list"]}>
                <li>
                    <button className={styles["nav-list__login-btn"]}>
                        <img src={"/login.svg"} className={styles["navbar-list__svg"]} alt={''}></img>
                        <a href="#">Sign In / Join</a>
                    </button>
                </li>
                <li>
                    <a href="#">
                        <img src = {'/love.svg'} className={styles["navbar-list__svg"]} alt={''} ></img>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={"/cart.svg"} alt={''} className={styles["navbar-list__svg"]} ></img>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Index
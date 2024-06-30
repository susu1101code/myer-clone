import styles from './Navbar.module.css'
import Logo from './svg/Logo'
import Submit from './svg/Submit'
import Login from './svg/Login'
import Love from "./svg/Love";
import Cart from "./svg/Cart";

const Navbar = () => {
    return (
        <nav className={styles["navbar"]}>
            <Logo/>
            <div className={styles["search"]}>
                <input className={styles["navbar-search__input"]} type="text" name="search"
                       placeholder="Search for product or brand"/>
                <Submit/>
            </div>
            <ul className={styles["navbar-list"]}>
                <li>
                    <button className={styles["nav-list__login-btn"]}>
                        <Login/>
                        <a href="#">Sign In / Join</a>
                    </button>
                </li>
                <li>
                    <a href="#">
                        <Love/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Cart/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
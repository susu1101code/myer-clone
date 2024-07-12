import styles from "./Navbar.module.css";
import LoginSvg from "@/component/navbar/LoginSvg";

const Index = () => {
  return (
    <nav className={styles["navbar"]}>
      <img src={"/logo.svg"} className={styles["navbar-logo"]} alt={""}></img>
      <div className={styles["search"]}>
        <input
          className={styles["navbar-search__input"]}
          type="text"
          name="search"
          placeholder="Search for product or brand"
        />
        <img
          src={"/submit.svg"}
          className={styles["navbar-search--submit"]}
          alt={""}
        ></img>
      </div>
      <ul className={styles["navbar-list"]}>
        <li>
          <button className={styles["nav-list__login-btn"]}>
            {/*<object id="navbar-list__svg" data="/login.svg" type="image/svg+xml"></object>*/}
            <LoginSvg />
            <a href="#">Sign In / Join</a>
          </button>
        </li>
        <li>
          <a href="#">
            {/*<img src = {'/love.svg'} className={styles["navbar-list__svg"]} alt={''} ></img>*/}
            <svg
              className={styles["navbar-list__svg"]}
              width="32"
              height="32"
              stroke-width="1.5px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12 20.5714 8.5786-8.721c1.8952-1.92665 1.8952-5.05029 0-6.97689-1.8951-1.9266-4.9677-1.9266-6.8629 0l-1.7157 1.74421-1.7157-1.74421c-1.89517-1.9266-4.9678-1.9266-6.86294 0-1.89515 1.9266-1.89515 5.05024 0 6.97689z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="currentColor"
                stroke-width="1.5px"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={"/cart.svg"}
              alt={""}
              className={styles["navbar-list__svg"]}
            ></img>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Index;

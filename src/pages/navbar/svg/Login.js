import styles from "@/pages/navbar/Navbar.module.css";

const Login = () => {
  return (
      <svg className={styles["navbar-list__svg"]} width="32" height="32" stroke-width="1.5px"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg" data-automation="logged-out">
          <path
              d="m2 22c0-4.4872 5.47619-8.3333 10-8.3333m0 0c4.5238 0 10 3.8461 10 8.3333m-10-8.3333c3.2217 0 5.8333-2.6117 5.8333-5.83337 0-3.22166-2.6116-5.83333-5.8333-5.83333-3.22166 0-5.83333 2.61167-5.83333 5.83333 0 3.22167 2.61167 5.83337 5.83333 5.83337z"
              stroke-linecap="round" strokeLinejoin="round" stroke="#1F1F1F"
              stroke-width="1.5px"></path>
      </svg>
  )
}

export default Login
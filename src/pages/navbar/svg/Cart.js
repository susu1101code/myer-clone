import styles from "@/pages/navbar/Navbar.module.css";

const Cart = () => {
  return (
      <svg className={styles["navbar-list__svg"]} width="32" height="32" color="#1F1F1F"
           stroke-width="1.5px"
           viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
          <path
              d="m8.42857 8.42857c0-.02005.00037-.39647.00111-.88373.00141-.92452.00418-2.24807.0084-2.29359.09649-1.04159.94959-3.25125 3.56512-3.25125 2.7899 0 3.5682 2.45874 3.5682 3.44314v2.98543m-13.5714-2.14286h20v13.57139c0 1.1835-.9594 2.1429-2.1429 2.1429h-15.71424c-1.18347 0-2.14286-.9594-2.14286-2.1429z"
              stroke-linecap="round" strokeLinejoin="round" stroke="#1F1F1F"
              stroke-width="1.5px"></path>
      </svg>
  )
}

export default Cart
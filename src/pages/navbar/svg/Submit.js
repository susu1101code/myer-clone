import styles from "@/pages/navbar/Navbar.module.css";

const Submit = () => {
  return (
      <svg className={styles["navbar-search--submit"]} width="24px" height="24px" viewBox="0 0 24 24"
           focusable="false">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Search" stroke="currentColor">
                  <circle vector-effect="non-scaling-stroke" id="Oval-13" cx="10.5" cy="10.5"
                          r="7"></circle>
                  <path vector-effect="non-scaling-stroke"
                        d="M15.510498,15.2756348 L21.6812898,21.4464265"
                        id="Path-2"></path>
              </g>
          </g>
      </svg>
  )
}

export default Submit
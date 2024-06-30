import styles from '../HeaderTop.module.css'

const ReturnIcon = () => {
  return (
      <svg focusable="false" viewBox="0 0 32 32" className={styles["header-top__svg"]}
           data-automation="tile-master-c-icon">
          <polyline fill="none" stroke="currentColor" points="21 10.5 21 6.5 11 6.5 11 10.5"
                    vector-effect="non-scaling-stroke"></polyline>
          <path fill="none" stroke="currentColor"
                d="M6,10.5V21.76A16.67,16.67,0,0,0,16,25.5a16.67,16.67,0,0,0,10-3.74V10.5Z"
                vector-effect="non-scaling-stroke"></path>
          <polyline fill="none" stroke="currentColor" points="14.94 20.37 12 17.5 14.94 14.5"
                    vector-effect="non-scaling-stroke"></polyline>
          <path fill="none" stroke="currentColor" d="M12,17.5h9" vector-effect="non-scaling-stroke"></path>
      </svg>
  )
}

export default ReturnIcon
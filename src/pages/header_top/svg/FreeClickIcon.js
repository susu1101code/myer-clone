
import styles from '../HeaderTop.module.css'
const FreeClickIcon = () => {
    return (
        <svg focusable="false" viewBox="0 0 32 32" className={styles["header-top__svg"]}
             data-automation="tile-master-c-icon">
            <path fill="none" stroke="currentColor" className="cls-1"
                  d="M13.11,14.5l-.11.12,2.24,6.88H16l.8-3.19L20,17.1v-.51Z"
                  vector-effect="non-scaling-stroke"></path>
            <polyline fill="none" stroke="currentColor" className="cls-2" points="21 10.5 21 6.5 11 6.5 11 10.5"
                      vector-effect="non-scaling-stroke"></polyline>
            <path fill="none" stroke="currentColor" className="cls-3"
                  d="M6,10.5V21.76A16.67,16.67,0,0,0,16,25.5a16.67,16.67,0,0,0,10-3.74V10.5Z"
                  vector-effect="non-scaling-stroke"></path>
        </svg>
    )
}

export default FreeClickIcon
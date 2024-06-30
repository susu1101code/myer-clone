import styles from "@/pages/navbar/Navbar.module.css";

const Love = () => {
  return (
      <svg className={styles["navbar-list__svg"]} width="32" height="32" stroke-width="1.5px"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg">
          <path
              d="m12 20.5714 8.5786-8.721c1.8952-1.92665 1.8952-5.05029 0-6.97689-1.8951-1.9266-4.9677-1.9266-6.8629 0l-1.7157 1.74421-1.7157-1.74421c-1.89517-1.9266-4.9678-1.9266-6.86294 0-1.89515 1.9266-1.89515 5.05024 0 6.97689z"
              stroke-linecap="round" strokeLinejoin="round" stroke="#1F1F1F"
              stroke-width="1.5px"></path>
      </svg>
  )
}

export default Love
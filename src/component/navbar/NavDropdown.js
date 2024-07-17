import styles from "@/component/navbar/Navbar.module.css";
import { useEffect, useRef } from "react";

const NavDropdown = ({ text, closeDropdown }) => {
  const ref = useRef(null);
  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      closeDropdown();
    }
  }

  return (
    <div ref={ref} className={styles["navbar-categories__dropdown"]}>
      {text}
    </div>
  );
};

export default NavDropdown;

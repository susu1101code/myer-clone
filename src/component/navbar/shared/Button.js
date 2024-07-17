import styles from "@/component/navbar/Navbar.module.css";
import NavDropdown from "@/component/navbar/NavDropdown";
import { useRef } from "react";

const Button = ({
  dropdownContent,
  text,
  openDropdown,
  closeDropdown,
  isDropdownOpen,
}) => {
  console.log("botton" + isDropdownOpen);
  function dropdownClickHandler() {
    {
      if (isDropdownOpen) {
        closeDropdown();
      } else {
        openDropdown(text);
      }
    }
  }

  return (
    <>
      <button
        onClick={dropdownClickHandler}
        className={styles["navbar-categories__button"]}
      >
        {text}
      </button>
      {isDropdownOpen && (
        <NavDropdown text={text} closeDropdown={closeDropdown} />
      )}

      {/*  {expandType !== "" && expandType === text && (*/}
      {/*  <NavDropdown expandType={expandType} onClick={onClick} />*/}
      {/*)}*/}
    </>
  );
};

export default Button;

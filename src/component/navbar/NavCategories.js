import styles from "./Navbar.module.css";
import Button from "@/component/navbar/shared/Button";
import { useEffect, useState } from "react";

const NavCategories = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownContent, setDropdownContent] = useState("");
  console.log("nav" + isDropdownOpen);
  function closeDropdown() {
    setIsDropdownOpen(false);
    setDropdownContent("");
  }
  function openDropdown(text) {
    console.log("run");
    setIsDropdownOpen(true);
    setDropdownContent(text);
  }
  return (
    <div className={styles["navbar-categories"]}>
      <Button
        className={styles["navbar-categories"]}
        dropdownContent={dropdownContent}
        text="Stocktake Sale"
        openDropdown={openDropdown}
        closeDropdown={closeDropdown}
        isDropdownOpen
      />
      {/*<Button*/}
      {/*  expandType={expandType}*/}
      {/*  text="Women"*/}
      {/*  className={styles["navbar-categories"]}*/}
      {/*  isDropdownOpen={isDropdownOpen}*/}
      {/*  setIsDropdownOpen={setIsDropdownOpen}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  expandType={expandType}*/}
      {/*  onClick={onClick}*/}
      {/*  text="Men"*/}
      {/*  className={styles["navbar-categories"]}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  expandType={expandType}*/}
      {/*  onClick={onClick}*/}
      {/*  text="Beauty"*/}
      {/*  className={styles["navbar-categories"]}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  expandType={expandType}*/}
      {/*  onClick={onClick}*/}
      {/*  text="Home"*/}
      {/*  className={styles["navbar-categories"]}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  expandType={expandType}*/}
      {/*  onClick={onClick}*/}
      {/*  text="Travel & Tech"*/}
      {/*  className={styles["navbar-categories"]}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  expandType={expandType}*/}
      {/*  onClick={onClick}*/}
      {/*  text="Kids"*/}
      {/*  className={styles["navbar-categories"]}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  expandType={expandType}*/}
      {/*  onClick={onClick}*/}
      {/*  text="Toys"*/}
      {/*  className={styles["navbar-categories"]}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  expandType={expandType}*/}
      {/*  onClick={onClick}*/}
      {/*  text="Gifts"*/}
      {/*  className={styles["navbar-categories"]}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  expandType={expandType}*/}
      {/*  onClick={onClick}*/}
      {/*  text="Clearance"*/}
      {/*  className={styles["navbar-categories"]}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  expandType={expandType}*/}
      {/*  onClick={onClick}*/}
      {/*  text="MYER one"*/}
      {/*  className={styles["navbar-categories"]}*/}
      {/*/>*/}
    </div>
  );
};

export default NavCategories;

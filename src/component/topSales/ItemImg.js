import styles from "./TopSales.module.css";
import Image from "next/image";

const ItemImg = ({ imgUrl }) => {
  return (
    <div className={styles["top-sales__item-img-container"]}>
      <Image
        className={styles["top-sales__item-img"]}
        src={imgUrl}
        alt={""}
        fill
      />
    </div>
  );
};

export default ItemImg;

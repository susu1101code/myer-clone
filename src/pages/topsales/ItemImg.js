import styles from "@/pages/topsales/TopSales.module.css";
import Image from "next/image";
// import itemImg from "/sample.jpeg"

const ItemImg = () => {
  return (
      <div className={styles["top-sales__item-img-container"]}>
          <Image className={styles["top-sales__item-img"]} src={"/sample.jpeg"} alt={""} fill/>

      </div>
  )
}

export default ItemImg
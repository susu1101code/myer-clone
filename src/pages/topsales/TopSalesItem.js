import styles from "@/pages/topsales/TopSales.module.css";
import ItemImg from "@/pages/topsales/ItemImg";
import DiscountPrice from "@/pages/topsales/DiscountPrice";

const TopSalesItem = () => {
    return (
        <section className={styles["top-sales__item"]}>
            <ItemImg/>

            <section className={styles["top-sales__item-info"]}>
                <div><p className={styles["top-sales__item-brand"]}>Soho</p>
                    <span
                        className={styles["top-sales__item-name"]}>Flannelette Pyjama Set in Leopard Skin 12332131231231</span>
                </div>
                <DiscountPrice/>
            </section>
        </section>
    )
}

export default TopSalesItem
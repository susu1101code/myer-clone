import styles from "./TopSales.module.css";
import DiscountPrice from "@/component/topSales/DiscountPrice";
import ItemImg from "@/component/topSales/ItemImg";
import {useState} from "react";

const TopSalesItem = ({item}) => {
    return (
        <section className={styles["top-sales__item"]}>
        <ItemImg imgUrl={item.url}/>

        <section className={styles["top-sales__item-info"]}>
            <div><p className={styles["top-sales__item-brand"]}>{item.brand}</p>
                <span
                    className={styles["top-sales__item-name"]}>{item.name}</span>
            </div>
            {/*<DiscountPrice originPrice ={item.originPrice} price ={item.price}/>*/}
            <DiscountPrice originPrice ={item.originPrice} price ={item.price}/>

        </section>
    </section>)
}

export default TopSalesItem
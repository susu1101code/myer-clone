import styles from "./TopSales.module.css";
import TopSalesItem from "@/component/topSales/TopSalesItem";
import { useEffect, useState } from "react";

const Index = () => {
  const initDataUrl = "http://localhost:3500/topSaleItems";
  const [items, setItems] = useState([]);
  const setFetchItems = async (url) => {
    const items = await fetchFromUrl(url);
    setItems(items);
  };

  useEffect(() => {
    setFetchItems(initDataUrl);
  }, []);

  return (
    <section className={styles["top-sales"]}>
      <h2 className={styles["top-sales__title"]}>Top Sale Picks For You</h2>
      {JSON.stringify(items)}
      <div className={styles["top-sales__list"]}>
        <button className={styles["top-sales__button-left"]}>&lt;</button>
        <div className={styles["top-sales__item-list"]}>
          {items ? (
            items.map((item) => <TopSalesItem key={item.id} item={item} />)
          ) : (
            <p>loading</p>
          )}
        </div>
        <button className={styles["top-sales__button-right"]}>&gt;</button>
      </div>
    </section>
  );
};

export default Index;

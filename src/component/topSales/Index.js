import styles from './TopSales.module.css'
import TopSalesItem from "@/component/topSales/TopSalesItem";

const items = [{
        id: 1, brand: 'Dyson', name: "HD07 Supersonic Hair Dryer 386820-01", originPrice: 659.00, price: 485.00 , url:"/topSalesItems/dyson1.jpeg"
    }, {
        id: 2, brand: 'Dyson', name: "Airwrap Complete Long Multi-Styler 400722-01 in Nickel/Copper", originPrice: 849.00, price: 697.00,url:"/topSalesItems/dyson2.jpeg"
    }, {
        id: 3, brand: "levi's", name: "511 Slim Fit Jeans in Black", originPrice: 249.00, price: 137.00 ,url:"/topSalesItems/levi1.jpeg"
    }, {
        id: 4,brand: "levi's", name: "Levi's   511 Slim Fit Jeans in Black ", originPrice: 249.00, price: 137.00, url:"/topSalesItems/levi2.jpeg"
    }, {
        id: 5, brand: "LEGO", name: "Icons Natural History Museum 10326", originPrice: 500.00, price: 499.00,url:"/topSalesItems/LEGO.jpeg"
    }, {
        id: 6, brand: "LEGO", name: "Icons Natural History Museum 10326", originPrice: 500.00, price: 499.00,url:"/topSalesItems/LEGO.jpeg"
    }, {
        id: 7, brand: "levi's", name: "Levi's   511 Slim Fit Jeans in Black ", originPrice: 249.00, price: 137.00,url:"/topSalesItems/levi1.jpeg"
    }]


const Index = () => {
    return (
        <section className={styles["top-sales"]}>
            <h2 className={styles["top-sales__title"]}>Top Sale Picks For You</h2>
            <div className={styles["top-sales__list"]}>
                <button className={styles["top-sales__button-left"]}>
                    &lt;
                </button>

                <div className={styles["top-sales__item-list"]}>
                    {items.map(item => <TopSalesItem key={item.id} item={item}/>)}
                </div>
                <button className={styles["top-sales__button-right"]}>
                    &gt;
                </button>
            </div>
        </section>
    )
}

export default Index
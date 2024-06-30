import Image from "next/image";
import {Inter} from "next/font/google";
import HeaderTop from "@/pages/header_top/HeaderTop";
import Navbar from "@/pages/navbar/Navbar";
import SearchSmall from "@/pages/navbar/search_small/SearchSmall";
import NavCategories from "@/pages/navbar/NavCategories";
import Hero from "@/pages/hero/Hero";
import TopSales from "@/pages/topsales/TopSales";
const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (<body>
        <HeaderTop/>
        <main>
            <header>
                <Navbar/>
                <SearchSmall/>
                <NavCategories/>
            </header>
            <Hero/>
            <TopSales/>
        </main>


        </body>);
}

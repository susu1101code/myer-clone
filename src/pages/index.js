import Image from "next/image";
import HeaderTop from "@/component/header_top/";
import SearchSmall from "@/component/navbar/searchSmall";
import NavCategories from "@/component/navbar/NavCategories";
import Hero from "@/component/hero/";
import TopSales from "@/component/topSales";
import Navbar from "@/component/navbar";

export default function Home() {
  return (
    <section>
      <HeaderTop />
      <main>
        <header>
          <Navbar />
          <SearchSmall />
          <NavCategories />
        </header>
        <Hero />
        <TopSales />
      </main>
    </section>
  );
}

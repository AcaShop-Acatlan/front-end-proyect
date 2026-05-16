import Image from "next/image";
import Header from "./components/header/header";
import Hero from "./components/hero-section/hero-section";
import Busqueda from "./busqueda/busqueda";
import PopularCategories from "./components/popular-categories/popular-categories";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PopularCategories />
      <Busqueda />
      <Footer/>
    </>
  );
}
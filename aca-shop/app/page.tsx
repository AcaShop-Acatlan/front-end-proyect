import Image from "next/image";
import Header from "./header/header";
import Hero from "./hero-section/hero-section";
import Busqueda from "./busqueda/busqueda";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Busqueda />
    </>
  );
}
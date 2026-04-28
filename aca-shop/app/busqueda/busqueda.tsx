"use client";

import { useState } from "react";
import styles from './busqueda.module.css'

const categorias=["Todas","Electrónica","Libros","Ropa","Accesorios","Deportes","Otros"];

export default function Busqueda(){
    const [categoriaActiva, setCategoriaActiva] = useState("Todas");
    return(
        <>
        <div className={styles.busqueda}>

        {/* Input + Selects */}
        <div className={styles.busquedaCard}>
          <div className={styles.inputWrap}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Buscar productos..." />
          </div>

          <select className={styles.select}>
            <option>Todas las categorías</option>
            <option>Electrónica</option>
            <option>Libros</option>
            <option>Ropa</option>
            <option>Accesorios</option>
            <option>Deportes</option>
            <option>Otros</option>
          </select>

          <select className={styles.select}>
            <option>Más recientes</option>
            <option>Precio: menor a mayor</option>
            <option>Precio: mayor a menor</option>
            <option>Más populares</option>
          </select>
        </div>

        {/* Chips */}
        <div className={styles.chipsRow}>
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`${styles.chip} ${categoriaActiva === cat ? styles.chipActive : ""}`}
              onClick={() => setCategoriaActiva(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>
    </>
  );
}


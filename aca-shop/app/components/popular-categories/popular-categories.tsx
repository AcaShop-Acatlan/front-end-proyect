// components/PopularCategories/PopularCategories.tsx

import styles from "./popular-categories.module.css";

import {
  Laptop,
  BookOpen,
  Shirt,
  ShoppingBag,
  Trophy,
  Ellipsis,
} from "lucide-react";

const categories = [
  {
    name: "Electrónica",
    products: 45,
    icon: Laptop,
  },
  {
    name: "Libros",
    products: 78,
    icon: BookOpen,
  },
  {
    name: "Ropa",
    products: 32,
    icon: Shirt,
  },
  {
    name: "Accesorios",
    products: 56,
    icon: ShoppingBag,
  },
  {
    name: "Deportes",
    products: 23,
    icon: Trophy,
  },
  {
    name: "Otros",
    products: 19,
    icon: Ellipsis,
  },
];

export default function PopularCategories() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.title}>
          Categorías Populares
        </h2>

        <div className={styles.grid}>
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className={styles.card}
              >
                <div className={styles.iconBox}>
                  <Icon
                    size={24}
                    className={styles.icon}
                  />
                </div>

                <h3 className={styles.categoryName}>
                  {category.name}
                </h3>

                <p className={styles.products}>
                  {category.products} productos
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
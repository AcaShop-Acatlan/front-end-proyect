import styles from './hero-section.module.css'

export default function Hero(){
    return(

          <section className={styles.hero}>
      <div className={styles["hero-content"]}>
        <h1>
          Compra y Vende entre <br />
          Estudiantes de la UNAM
        </h1>

        <p>
          El marketplace exclusivo para la comunidad de FES Acatlán.
          <br />
          Encuentra lo que necesitas o vende lo que ya no usas.
        </p>

        <div className={styles.buttons}>
          <button className={styles["btn-primary"]}>
            Explorar Productos
          </button>
          <button className={styles["btn-secondary"]}>
            Publicar Producto
          </button>
        </div>
      </div>
    </section>
    
    );
}
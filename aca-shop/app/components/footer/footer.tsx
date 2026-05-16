import styles from './footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.container}>
        {}
        <div className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>¿Listo para empezar?</h2>
          <p>Únete a la comunidad de estudiantes que ya están comprando y vendiendo en AcaShop</p>
          <button className={styles.ctaButton}>Crear Cuenta Gratis</button>
        </div>
        </div>

        {}
        <div className={styles.grid}>
          
          {}
          <div className={styles.column}>
            <div className={styles.logo}>
              <span className={styles.icon}>🛒</span>
              <h2>AcaShop</h2>
            </div>
            <p className={styles.description}>
              Marketplace exclusivo para estudiantes de FES Acatlán, UNAM
            </p>
          </div>

          {}
          <div className={styles.column}>
            <h3>Navegación</h3>
            <nav className={styles.links}>
              <a href="#">Catálogo</a>
              <a href="#">Mi Cuenta</a>
            </nav>
          </div>

          {}
          <div className={styles.column}>
            <h3>Soporte</h3>
            <nav className={styles.links}>
              <a href="#">Términos y Condiciones</a>
            </nav>
          </div>

          {}
          <div className={styles.column}>
            <h3>Contacto</h3>
            <p>FES Acatlán, UNAM</p>
            <a href="acashop@acatlan.unam.mx" className={styles.email}>
              acashop@acatlan.unam.mx
            </a>
          </div>

        </div>

        {}
        <div className={styles.bottom}>
          <p>© 2024 AcaShop - FES Acatlán, UNAM. Todos los derechos reservados.</p>
          <p className={styles.powered}>Equipo 5</p>
        </div>

      </div>
    </footer>
  )
}
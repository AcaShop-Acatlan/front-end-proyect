
import styles from './header.module.css'
export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.container}>

        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.icon}>🛒</span>
          <h1>AcaShop</h1>
        </div>

        {/* Navegación */}
        <nav className={styles.nav}>
          <a href="#">Catálogo</a>
          <a href="#">Mi Cuenta</a>
        </nav>

        {/* Acciones */}
        <div className={styles.actions}>
          <span className={styles.cart}>🛍️</span>
          <button className={styles.button}>Iniciar Sesión</button>
        </div>

      </div>

        </header>
    )
}
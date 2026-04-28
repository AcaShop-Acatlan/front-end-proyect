import styles from './producto.module.css'

interface ProductoProps {
  imagen: string
  categoria: string
  nombre: string
  precio: number
  condicion: string
  estado: string
  vendedor: string
}

export default function Producto({
  imagen = '/placeholder.jpg',
  categoria = 'Electrónica',
  nombre = 'Calculadora Científica Casio FX-991',
  precio = 450,
  condicion = 'Usado',
  estado = 'Como nuevo',
  vendedor = 'Juan Perez',
}: Partial<ProductoProps>) { // Aquí cerramos el objeto de props y asignamos el tipo
  return (
     <article className={styles.producto}>
      <div className={styles.imagenWrapper}>
        <img src={imagen} alt={nombre} className={styles.imagen} />
      </div>

      <div className={styles.info}>
        <span className={styles.categoria}>{categoria}</span>
        <h3 className={styles.nombre}>{nombre}</h3>

        <div className={styles.precioRow}>
          <span className={styles.precio}>${precio.toLocaleString('es-MX')}</span>
          <span className={styles.condicion}>
            {condicion} · {estado}
          </span>
        </div>

        <div className={styles.vendedorRow}>
          <span className={styles.vendedorIcon}>✕</span>
          <span className={styles.vendedor}>{vendedor}</span>
        </div>
      </div>
    </article>
  )
}

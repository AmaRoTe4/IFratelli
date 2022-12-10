import NavBarPersonal from "./navBarPersonal"
import styles from "styles/productos.module.css"

export default function Productos(){
    return (
        <article className={styles.container} id="Productos">
            <NavBarPersonal nombre="Productos"/>
            <section>productos</section>
        </article>
    )
}
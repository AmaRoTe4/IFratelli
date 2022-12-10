import NavBarPersonal from "./navBarPersonal"
import styles from "styles/servicios.module.css"

export default function Servicios(){
    return (
        <article className={styles.container} id="Servicios">
            <NavBarPersonal nombre="Servicios"/>
            <section>servicios</section>
        </article>
    )
}
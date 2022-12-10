import NavBarPersonal from "./navBarPersonal"
import styles from "styles/local.module.css"

export default function Local(){
    return (
        <article className={styles.container} id="Local">
            <NavBarPersonal nombre="Local"/>
            <section>local</section>
            <section>ubicacion</section>
        </article>
    )
}
import NavBarPersonal from "./navBarPersonal"
import styles from "styles/contacto.module.css"

export default function Contacto(){
    return (
        <footer className={styles.container} id="Contacto">
            <NavBarPersonal nombre="Contacto"/>
            <section>telefono</section>
            <section>emial</section>
            <section>horarios</section>
            <section>
                <ul>
                    <li>f</li>
                    <li>i</li>
                    <li>w</li>
                </ul>
            </section>
            <div>
                <h6>©Copyright All Rights Reserved</h6>
            </div>
        </footer>
    )
}
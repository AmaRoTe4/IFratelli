import NavBarPersonal from "./navBarPersonal"
import styles from "styles/servicios.module.css"
import { useState } from "react";
import Data from "../data/servicios.json"

interface Services {
    nombre: string;
    value: string;
}

export default function Servicios(){
    const [servicios] = useState<Services[]>(Data)
    
    return (
        <article className={`${styles.container}`} id="Servicios">
            <NavBarPersonal nombre="Servicios" />
            <section className="row">
                {servicios.map((n , i) => 
                    <ul key={i} className="col-md-3 col-10">
                        <li className={styles.containerNombre}>
                            <h4>{n.nombre}</h4>
                        </li>
                        <li className={styles.containerValue}>
                            <p>{n.value}</p>
                        </li>
                    </ul>
                )}
            </section>
        </article>
    )
}
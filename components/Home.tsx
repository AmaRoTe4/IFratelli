import styles from "styles/home.module.css"
import Alfajores from "public/images/alfajores.png"
import Image from "next/image"
import { useEffect, useState } from "react";

interface Props{
    height: number;
    width: number;
}

export default function Home({height , width}: Props){
    return (
        <article className={styles.container} id="Home">
            <section>
                <div className={styles.boxMensaje}>
                    <h1>Somos IFratelli</h1>
                    <h3>Delicias Artesanales</h3>
                    <h4>Productores de los mejores alfajores</h4>
                </div>
                <div className={styles.boxImage}>
                    <Image 
                        alt="Alfajores I Fratilli"
                        src={Alfajores} 
                        width={width > 700 ?  width / 2.5 : width / 1.05} 
                    />
                </div>
            </section>
        </article>
    )
}
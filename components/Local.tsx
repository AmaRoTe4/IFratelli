import NavBarPersonal from "./navBarPersonal"
import styles from "styles/local.module.css"
import Image from "next/image"
import photoLocal from "public/images/local.png"
import { useEffect, useState } from "react";

interface Props{
    height: number;
    width: number;
}

export default function Local({width, height}:Props){
    return (
        <article className={styles.container} id="Local">
            <NavBarPersonal nombre="Nuestro Local"/>
            <section className={styles.boxPhotoLocal}>
                <Image 
                    alt="local IFratilli"
                    src={photoLocal}
                    width={width >= 700 ? width * 0.65 : width}
                    height={width >= 700 ? height * 0.65 : height * 0.40}
                />
            </section>

            <section className={styles.boxTitleUbicacion}>
                <h3 className="text-center">
                    <a>Ubicado</a>
                </h3>
            </section>
            
            <section className={styles.boxMap}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111485.16018664131!2d-59.81316017301863!3d-29.167287281451728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944eba9a3ba2dbab%3A0x350cd5b5c9792e95!2sReconquista%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1671277851078!5m2!1ses-419!2sar"
                    height={height / 100 * 40}
                    className={styles.map}
                >    
                </iframe>
            </section>
        </article>
    )
}
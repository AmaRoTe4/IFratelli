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
                    width={width}
                    className={styles.photo}
                />
            </section>

            <NavBarPersonal nombre="Ubicado"/>
            <section className={styles.boxMap}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9821.890543745661!2d-59.759323537543246!3d-29.499953254718935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944c067f5b2c5c19%3A0x64d40d28081947b0!2sRomang%20F%C3%BAtbol%20Club!5e0!3m2!1ses-419!2sar!4v1670771017908!5m2!1ses-419!2sar"
                    height={height / 100 * 40}
                    className={styles.map}
                >    
                </iframe>
            </section>
        </article>
    )
}
import NavBarPersonal from "./navBarPersonal"
import styles from "styles/contacto.module.css"
import Image from "next/image"
import iconFacebook from "public/svg/facebook.svg"
import iconWhatsapp from "public/svg/whatsapp.svg"
import iconInstagram from "public/svg/instagram.svg"

interface Data{
    nombre: string,
    value: string|number;
}

export default function Contacto(){
    const data:Data[] = [
        {nombre: 'Telofono' , value: 3482650397},
        {nombre: 'Email' , value: 'amaro7jj@gmail.com'},
        {nombre: 'Horarios' , value: '9:00-12:00 16:00-20:00'},
    ]

    return (
        <footer className={styles.container} id="Contacto">
            <NavBarPersonal nombre="Contacto" />
            
            <div className={styles.colchon} />

            {data.map((n ,i) => 
                <section key={i} className={styles.boxContact}>
                    <div>
                        <h4 style={{fontSize: 30 , alignItems:'end'}}>{n.nombre}</h4>
                        <h4 style={{fontSize: 20}}>{n.value}</h4>
                    </div>
                </section>
            )}

            <section className={styles.boxRedes}>
                <div>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <Image
                            alt="icon-facebook"
                            height={45}
                            width={45}
                            src={iconFacebook}
                        />
                    </a>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <Image
                            alt="icon-instagram"
                            height={45}
                            width={45}
                            src={iconInstagram}
                        />
                    </a>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <Image
                            alt="icon-whatsapp"
                            height={45}
                            width={45}
                            src={iconWhatsapp}
                        />
                    </a>
                </div>
            </section>
            <div className={styles.boxCopy}>
                <h6>©Copyright All Rights Reserved</h6>
            </div>
        </footer>
    )
}
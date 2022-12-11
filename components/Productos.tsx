import NavBarPersonal from "./navBarPersonal"
import styles from "styles/productos.module.css"
import Data from "../data/productos.json"
import { useState } from "react"
import Image from "next/image"

interface Productos{
    nombre:string;
    photo:string;
}   

interface Props{
    height:number;
    width:number;
}   

export default function Productos({width , height}:Props){
    const [productos] = useState<Productos[]>(Data)
    const [vista , setVista] = useState<number[]>([0 , 1 , 2])
    
    const moverUnoDerecha = ():void => {
        let aux = vista.map((n) => n !== 5 ? n + 1 : 0)
        setVista(aux)
    }

    const moverUnoIzquierda = ():void => {
        let aux = vista.map((n) => n !== 0 ? n - 1 : 5)
        setVista(aux)
    }

    const moverTres = ():void => {
        if(vista[0] === 0) setVista([3,4,5])
        else setVista([0,1,2])
    }

    return (
        <article className={styles.container} id="Productos">
            <NavBarPersonal nombre="Productos"/>
            <section className={styles.boxProductos}>
                
                {width >= 700 && 
                    <>
                        <div onClick={(e) => {e.preventDefault();moverTres()} }>
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                        {productos.map((n , i) => 
                            vista[0] === i || vista[1] === i || vista[2] === i
                            ? <ul key={i}>
                                <li className={styles.boxImage}>
                                    <Image 
                                        alt="Producto I Fratelli"
                                        src={n.photo}
                                        width={width >= 700 ? width * 0.25 : width * 0.85}
                                        height={width >= 700 ? height * 0.5 : height * 0.6}
                                    />
                                </li>
                                <li className={styles.boxNombre}>
                                    <h4>
                                        {n.nombre}
                                    </h4>
                                </li>
                            </ul> : ""
                        )}
                        <div onClick={(e) => {e.preventDefault();moverTres()} }>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </>}

                {width < 700 && 
                    <>
                        <ul>
                            <li className={styles.boxImage}>
                                <div onClick={(e) => {e.preventDefault();moverUnoIzquierda()} }>
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>
                                <Image 
                                    alt="Producto I Fratelli"
                                    src={productos[vista[0]].photo}
                                    width={width >= 700 ? width * 0.25 : width * 0.85}
                                    height={width >= 700 ? height * 0.5 : height * 0.6}
                                />
                                <div onClick={(e) => {e.preventDefault();moverUnoDerecha()}   }>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </li>
                            <li className={styles.boxNombre}>
                                <h4>
                                    {productos[vista[0]].nombre}
                                </h4>
                            </li>
                        </ul>
                    </>
                }

            </section>
        </article>
    )
}
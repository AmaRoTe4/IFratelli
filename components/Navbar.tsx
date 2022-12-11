import styles from "styles/index.module.css"
import Logo from "public/images/logo.png"
import Image from "next/image"
import { useEffect, useState } from "react";

export default function Navbar(){
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollY]);


    return (
        <nav 
            className={`${styles.containerNav} ${scrollY >= 100 ? styles.active : ""} navbar navbar-expand-lg bg-light`} 
            style={{padding:0}}
        >
            <div className={`container-fluid ${scrollY >= 100 ? styles.active : ""} ${styles.containerNavBar}`}> 
                <a className="navbar-brand" href="#">
                    <Image
                        alt="Logo IFratilli" 
                        src={Logo}
                        priority
                        height={80}
                        width={80}
                    />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNav" className={`collapse navbar-collapse`}>  
                    <ul className={`navbar-nav`}>
                        <li className="nav-item">
                            <a className="nav-link active" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#Servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#Productos">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#Local">Local</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#Contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
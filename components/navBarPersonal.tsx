import styles from "styles/index.module.css";

interface Props{
    nombre:string;
}

export default function NavBarPersonal({nombre}:Props){
    return (
        <section className={styles.bodyNavBavPersonal}>
            <h3>
                <a href={`#${nombre}`}>{nombre}</a>
            </h3>
        </section>
    )
}
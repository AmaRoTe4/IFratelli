import Head from '../components/Head'
import styles from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import Script from 'next/script'
import Home from '../components/Home'
import Servicios from '../components/Servicios'
import Productos from '../components/Productos'
import Local from '../components/Local'
import Contacto from '../components/Contacto'
import { useEffect, useState } from 'react'

export default function Index() {
    const [width , setWidth] = useState<number>(0);
    const [height , setHeight] = useState<number>(0);

    useEffect(() => {
        const handleMedidad = () => {
            setWidth(window.screen.width);
            setHeight(window.screen.height);
        };

        handleMedidad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setWidth , setHeight]);
  
    return (
      <div className={styles.container} >
        <Head />
        <Navbar width={width} />

        <div style={{height:'15.5vh'}} />

        <Home height={height} width={width} />
        <Servicios />
        <Productos height={height} width={width} />
        <Local height={height} width={width} />
        <Contacto />

        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous" />
      </div>
    )
}

import Head from '../components/Head'
import styles from '../styles/index.module.css'
import Navbar from '../components/Navbar'
import Script from 'next/script'
import Home from '../components/Home'
import Servicios from '../components/Servicios'
import Productos from '../components/Productos'
import Local from '../components/Local'
import Contacto from '../components/Contacto'

export default function Index() {
  return (
    <div className={styles.container} >
      <Head />
      <Navbar />

      <div style={{height:'13.5vh'}} />

      <Home />
      <Servicios />
      <Productos />
      <Local />
      <Contacto />

      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous" />
    </div>
  )
}

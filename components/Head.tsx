/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Logo from "public/images/logo.png"

export default function head(){
    return (
        <Head>
            <title>IFratelli</title>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="descripcion" content="Somos IFratelli productores de los mejores productos dulces del norte de Santa Fe, Te esperamos en nuestro local o por contacto" />
            <meta name="keywords" content="compartir, alfajores, reconquista, santa fe, argentina, productos artesanales, pasteles, pastelitos, dulce, requisimo, chocolate" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <link rel="shortcut icon" type="link" href="images/logo.png" />
        </Head>
    )
}
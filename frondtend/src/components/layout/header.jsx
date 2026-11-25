import {SITIO} from '../../data/siteConfig'
import Logo from '../ui/Logo'
import Navbar from './Navbar'
import GrecaOtomi from '../ui/GrecaOtomi'

export default function Header(){
    return (
        <header className="sticky top-0 z-40 bg-manta/95 shadow-sm backdrop-blur">
            <div className=' bg-bosque-oscuro py-1 text-center text-xs front-semibold tracking-wide text-manta'>
                {SITIO.saludo}.{SITIO.comunidad}

            </div>
            <diV className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3'>
                <Logo />
                <Navbar />

            </diV>
            <GrecaOtomi />

        </header>
    )
}
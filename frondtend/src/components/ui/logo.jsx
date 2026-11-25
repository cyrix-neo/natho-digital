import { Link } from "react-router-dom"
import { SITIO } from '../../data/siteConfig'
import logoImg from '../../assets/logo.png' 

export default function logo({ clara = false }) {
  const colorNombre = clara ? 'text-manta' : 'text-bosque-oscuro'
  const colorLema = clara ? 'text-maiz' : 'text-grama'

  return (
    <Link 
      to="/" 
      className="flex items-center gap-3" 
      aria-label={`${SITIO.nombre}, ir al inicio`}
    >
      <img src={logoImg} alt={SITIO.nombre} className="h-10 w-auto" />
      <div>
        <span className={`block font-titulo text-xl font-extrabold ${colorNombre}`}>{SITIO.nombre}</span>
        <span className={`block text-xs font-bold uppercase tracking-[0.2em] ${colorLema}`}>{SITIO.lema}</span>
      </div>
    </Link>
  )
}
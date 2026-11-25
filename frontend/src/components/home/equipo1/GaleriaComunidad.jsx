// ================================================================
// GaleriaComunidad.jsx - q EQUIPO 1 q
// Sección: imágenes representativas de la comunidad
//
// INSTRUCCIONES PARA EL EQUIPO 1:
//   1. Guarden las fotos en: public/img/comunidad/
//      (.jpg o .webp, máximo ~300 KB cada una)
//   2. Úsenlas así: <img src="/img/comunidad/foto-1.jpg" alt="..." />
//   3. Cada <img> DEBE llevar un "alt" que describa la foto.
//   4. Sugerencia: una cuadrícula con Tailwind
//        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> ... </div>
//   5. Pidan permiso a las personas que aparezcan en las fotos.
//   6. Borren el <EspacioReservado ... /> cuando terminen.
// ================================================================
import EspacioReservado from '../../ui/EspacioReservado'

export default function GaleriaComunidad() {
  return (
    <section id="galeria-comunidad" className="bg-manta-oscura/60" aria-labelledby="titulo-galeria">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* ▼▼▼ EQUIPO 1: SU CÓDIGO VA AQUÍ ▼▼▼ */}

        <EspacioReservado
          equipo="Equipo 1"
          titulo="Imágenes de la comunidad"
          archivo="src/components/home/equipo1/GaleriaComunidad.jsx"
          pendientes={['Galería de fotos representativas de Las Moras', 'Fotos en public/img/comunidad/', 'Cada foto con su texto "alt"']}
        />
        <h2 id="titulo-galeria" className="sr-only">Imágenes de la comunidad</h2>

        {/* ▲▲▲ EQUIPO 1: HASTA AQUÍ ▲▲▲ */}
      </div>
    </section>
  )
}
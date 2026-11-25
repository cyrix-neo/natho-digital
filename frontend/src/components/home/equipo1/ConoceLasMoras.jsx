// ================================================================
// ConoceLasMoras.jsx - q EQUIPO 1 q
// Sección: información general de la comunidad
// - ¿Dónde se ubica? (municipio, estado, cómo llegar;
//   opcional: mapa de Google Maps con <iframe>)
// - Un poco de su historia
//
// INSTRUCCIONES PARA EL EQUIPO 1:
// 1. Escriban su código ENTRE las marcas ▼▼▼ y ▲▲▲.
// 2. Usen los colores de la paleta: bg-manta, text-bosque,
//    text-grana, bg-maiz... (ver index.css).
// 3. Cuando terminen, BORREN el <EspacioReservado ... />
//    y la línea del <h2 className="sr-only">.
// 4. NO cambien el id="conoce-las-moras": el botón del
//    banner lleva a esta sección con ese id.
// ================================================================
import EspacioReservado from '../../ui/EspacioReservado'

export default function ConoceLasMoras() {
  return (
    <section id="conoce-las-moras" className="mx-auto max-w-7xl scroll-mt-32 px-4 py-16" aria-labelledby="titulo-conoce">
      {/* ▼▼▼ EQUIPO 1: SU CÓDIGO VA AQUÍ ▼▼▼ */}

      <EspacioReservado
        equipo="Equipo 1"
        titulo="Conoce Las Moras"
        archivo="src/components/home/equipo1/ConoceLasMoras.jsx"
        pendientes={['¿Dónde se ubica la comunidad?', 'Un poco de su historia', 'Opcional: mapa de Google Maps']}
      />
      <h2 id="titulo-conoce" className="sr-only">Conoce Las Moras</h2>

      {/* ▲▲▲ EQUIPO 1: HASTA AQUÍ ▲▲▲ */}
    </section>
  )
}
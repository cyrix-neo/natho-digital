export const SITIO = {
    nombre: 'ÑÄTHO DIGITAL', 
    lema: '¡La cultura otomí vive!', 
    comunidad: 'Las Moras, Villa del Carbón, Estado de México', 
    saludo: "Ki hast'i, Buenos días", 
    escuela: 'CECYTEM. Carrera Técnica en Programación, 3er semestre',
    anio: new Date().getFullYear() 
};

export const MENU = [
    { text: 'inicio', ruta: '/' }, 
    { text: 'lecciones', ruta: '/lecciones' },
    { text: 'videojuegos', ruta: '/videojuegos' }, 
    { text: 'casas de resguardo', ruta: '/casa' } 
];

export const MODULOS = [
    { titulo: 'lecciones interactivas', texto: 'aprende traducción palabras y cuentos o leyendas otomí', ruta: '/lecciones', color: 'bg-turquesa', icono: '📖' }, // Agregada coma, corregido 'leciones', 'text' a 'texto', y añadido '/' a la ruta
    { titulo: 'videojuegos', texto: 'trivia, ahorcado, memorama con tres niveles', ruta: '/videojuegos', color: 'bg-grana', icono: '🎮' }, // Corregido 'tivia' e 'icino' a 'icono'
    { titulo: 'las seis casas de resguardo', texto: 'vestigios, comida, lengua, herbolaria, textiles y arte', ruta: '/casas', color: 'bg-barro', icono: '🏠' } // Corregido 'sesis' e 'icino' a 'icono'
];
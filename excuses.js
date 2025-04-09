// Objeto con todas las partes de las excusas

const excusesParts = {
    quien: ["Mi abuela", "Mi hermana", "Mi coche", "Mi perro"],
    accion: ["se accidentó", "se enfermó", "se averió", "se perdió"],
    cuando: ["ayer", "anoche", "esta mañana", "hace una hora"],
    que: ["y debo llevarla al hospital", "y debo cuidarla", "y debo llevarlo al taller", "y debo encontrarlo"],
};

// Función para obtener un elemento aleatorio de un array

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

// Función principal para generar excusas

const generateExcuse = () => {
    const { quien, accion, que, cuando } = excusesParts;
    const excuse = `${getRandomElement(quien)} ${getRandomElement(accion)} ${getRandomElement(que)} ${getRandomElement(cuando)}.`;
    document.getElementById("excuse").textContent = excuse;
};

// Genera excusa inicial al cargar
generateExcuse();
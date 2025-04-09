// Objeto con todas las partes de las excusas
const excusesParts = {
    quien: ["Mi abuela", "Mi hermana", "Mi coche", "Mi perro"],
    accion: ["se accidentó", "se enfermó", "se averió", "se perdió"],
    cuando: ["ayer", "anoche", "esta mañana", "hace una hora"],
    que: ["y debo llevarla al hospital", "y debo cuidarla", "y debo llevarlo al taller", "y debo encontrarlo"],
};

// Objeto con los datos a combinar
const wordCategories = {
    pronouns: ['the', 'our'],
    adjectives: ['great', 'big'],
    nouns: ['jogger', 'racoon'],
    extensions: ['.com', '.net', '.es', '.ar']
};

// Función para obtener un elemento aleatorio de un array
const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

// Función principal para generar excusas
function generateExcuse() {
    const { quien, accion, que, cuando } = excusesParts;
    const excuse = `${getRandomElement(quien)} ${getRandomElement(accion)} ${getRandomElement(que)} ${getRandomElement(cuando)}.`;
    document.getElementById("output").textContent = excuse;
}

// Función para generar dominios
function generateDomain() {
    const { pronouns, adjectives, nouns, extensions } = wordCategories;
    const pronoun = getRandomElement(pronouns);
    const adjective = getRandomElement(adjectives);
    const noun = getRandomElement(nouns);
    const extension = getRandomElement(extensions);

    const domain = `${pronoun}${adjective}${noun}${extension}`;
    document.getElementById("output").textContent = domain;
}

// Botones
document.getElementById("generateExcuse").onclick = generateExcuse;
document.getElementById("generateDomain").onclick = generateDomain;

// Genera excusa inicial al cargar
generateExcuse();
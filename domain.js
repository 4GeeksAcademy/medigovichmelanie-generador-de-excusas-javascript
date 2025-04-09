// Objeto con los datos a combinar

const wordCategories = {
    pronouns: ['the', 'our'],
    adjectives: ['great', 'big'],
    nouns: ['jogger', 'racoon'],
    extensions: ['.com', '.net', '.es', '.ar']
};

// Función para generar dominios

function generateDomains(categories) {
    const { pronouns, adjectives, nouns, extensions } = categories;
    
    pronouns.forEach(pronoun => {
        adjectives.forEach(adjective => {
            nouns.forEach(noun => {
                extensions.forEach(extension => {
                    console.log(`${pronoun}${adjective}${noun}${extension}`);
                });
            });
        });
    });
}

// Ejecutar
generateDomains(wordCategories); 
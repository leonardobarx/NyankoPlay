const { addonBuilder } = require("stremio-addon-sdk");
const { catalogs: seriesCatalogs, seriesStreams, seriesSubtitles } = require("./Series");
const { catalogs: movieCatalogs, movieStreams, movieSubtitles } = require("./Movies");

// Definição do manifesto do addon
const manifest = {
    id: "community.Nyankoplay", // ID único do addon
    version: "0.0.3", // Versão do addon
    catalogs: [
        { type: "movie", id: "movies" }, // Catálogo de filmes
        { type: "series", id: "series" }, // Catálogo de séries
    ],
    resources: ["catalog", "stream", "meta", "subtitles"], // Recursos que o addon oferece (catálogos, streams, metadados e legendas)
    types: ["movie", "series"], // Tipos de conteúdo suportados (filmes e séries)
    name: "NyankoPlay", // Nome do addon
    description: "Catálogo, stream e legendas de Tokusatsus", // Descrição do addon
};

const builder = new addonBuilder(manifest);

// Combina os catálogos de filmes e séries em um único array
const catalogs = [...seriesCatalogs, ...movieCatalogs];

// Manipulador para a requisição de busca de catálogos
builder.defineCatalogHandler(({ type, extra }) => {
    let results = catalogs;

    // Filtra os catálogos disponíveis pelo tipo especificado (filme ou série)
    results = results.filter((catalog) => catalog.type === type);

    // Checa se há uma busca e filtra o catálogo com base na busca
    if (extra && extra.search) {
        const searchQuery = extra.search.toLowerCase();
        results = results.filter(catalog => catalog.name.toLowerCase().includes(searchQuery));
    }

    // Retorna um array de objetos contendo as informações dos catálogos filtrados
    return Promise.resolve({
        metas: results.map(catalog => ({
            id: catalog.id,
            name: catalog.name,
            type: catalog.type,
            poster: catalog.poster // Garanta que o pôster seja uma URL válida
        })),
        cacheMaxAge: 300, // Armazena em cache por 5 minutos
        staleError: 86400, // Mostra dados antigos se houver um erro por até um dia
        staleRevalidate: 600, // Tenta revalidar os dados antigos após 10 minutos
    });
});

// Manipulador para a requisição de streams
// Manipulador para a requisição de streams
builder.defineStreamHandler(({ type, id }) => {
    try {
        // Decide qual array de stream usar baseado no tipo
        const streams = type === "movie" ? movieStreams[id] : seriesStreams[id];
        return Promise.resolve({ streams: streams ? streams : [] });
    } catch (error) {
        console.error(`Erro ao buscar streams: ${error.message}`);
        return Promise.resolve({ streams: [] });
    }
});

// Manipulador para a requisição de legendas
builder.defineSubtitlesHandler(({ type, id }) => {
    const subtitles = type === "movie" ? movieSubtitles[id] : seriesSubtitles[id];
    return Promise.resolve({ subtitles: subtitles ? subtitles : [] });
});

// Manipulador para a requisição de busca de metadados
builder.defineMetaHandler(({ type, id }) => {
    // Filtra os metadados disponíveis pelo tipo e ID fornecidos
    const meta = catalogs.find((item) => item.type === type && item.id === id);

    // Retorna o metadado correspondente
    return Promise.resolve({ meta });
});

module.exports = builder.getInterface();
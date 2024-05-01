const { addonBuilder } = require("stremio-addon-sdk");
const { catalogs: seriesCatalogs, seriesStreams, seriesSubtitles } = require("./Series");
const { catalogs: movieCatalogs, movieStreams, movieSubtitles } = require("./Movies");

// Definição do manifesto do addon
const manifest = {
    id: "community.Nyankoplay", // ID único do addon
    version: "0.0.2", // Versão do addon
    catalogs: [
        { type: "movie", id: "movies" }, // Catálogo de filmes
        { type: "series", id: "series" }, // Catálogo de séries
    ],
    resources: ["catalog", "stream", "meta", "subtitles"], // Recursos que o addon oferece (catálogos, streams, metadados e legendas)
    types: ["movie", "series"], // Tipos de conteúdo suportados (filmes e séries)
    name: "NyankoPlay Tokusatsu BR", // Nome do addon
    description: "Catálogo e stream de Tokusatsus em PTBR", // Descrição do addon
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
builder.defineStreamHandler(async ({ type, id }) => {
    try {
        // Decide qual array de stream usar baseado no tipo
        const streams = type === "movie" ? movieStreams[id] : seriesStreams[id];
        const subtitles = type === "movie" ? movieSubtitles[id] : seriesSubtitles[id];

        // Se houver legendas, carrega-as primeiro
        let streamsWithSubtitles = streams || [];
        if (subtitles && subtitles.length > 0) {
            // Carrega as legendas
            const subtitlesPromises = subtitles.map(async (subtitle) => {
                const { url, lang } = subtitle;
                try {
                    const response = await fetch(url);
                    const subtitlesData = await response.text();
                    // Retorna o objeto de legenda formatado
                    return { url: url, lang: lang, data: subtitlesData };
                } catch (error) {
                    console.error(`Erro ao carregar legenda ${url}: ${error.message}`);
                    return null;
                }
            });
            // Aguarda todas as promessas de carregamento das legendas
            const loadedSubtitles = await Promise.all(subtitlesPromises);
            // Adiciona as legendas carregadas no início dos streams
            streamsWithSubtitles = loadedSubtitles.concat(streamsWithSubtitles);
        }

        return Promise.resolve({ streams: streamsWithSubtitles });
    } catch (error) {
        console.error(`Erro ao buscar streams: ${error.message}`);
        return Promise.resolve({ streams: [] });
    }
});

// Manipulador para a requisição de legendas
builder.defineSubtitlesHandler(async (args) => {
    const { type, id, extra } = args;
    const { videoHash, videoSize, filename } = extra || {};

    try {
        let subtitles = [];

        if (type === "movie") {
            // Obtém as legendas do filme
            subtitles = movieSubtitles[id] || [];
        } else if (type === "series") {
            // Obtém as legendas da série
            subtitles = seriesSubtitles[id] || [];
        }

        // Formata as legendas para o formato exigido pelo Stremio
        subtitles = subtitles.map((subtitle, index) => ({
            id: `${id}-${index}`, // Gera um ID único para cada legenda
            url: subtitle.url, // URL da legenda
            lang: subtitle.lang // Código de idioma da legenda
        }));

        // Se houver legendas, retorna o array de legendas
        if (subtitles.length > 0) {
            return Promise.resolve({ subtitles });
        } else {
            // Caso contrário, retorna um array vazio
            return Promise.resolve({ subtitles: [] });
        }
    } catch (error) {
        console.error(`Erro ao buscar legendas: ${error.message}`);
        return Promise.resolve({ subtitles: [] });
    }
});

// Manipulador para a requisição de busca de metadados
builder.defineMetaHandler(({ type, id }) => {
    // Filtra os metadados disponíveis pelo tipo e ID fornecidos
    const meta = catalogs.find((item) => item.type === type && item.id === id);

    // Retorna o metadado correspondente
    return Promise.resolve({ meta });
});

module.exports = builder.getInterface();
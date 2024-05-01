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
builder.defineStreamHandler(async ({ type, id }) => {
    try {
        // Decide qual array de stream usar baseado no tipo
        const streams = type === "movie" ? movieStreams[id] : seriesStreams[id];
        
        // Verifica se há legendas disponíveis para o vídeo
        let subtitles = [];
        if (type === "movie") {
            subtitles = movieSubtitles[id] || [];
        } else if (type === "series") {
            subtitles = seriesSubtitles[id] || [];
        }

        // Se não houver legendas, envia apenas os streams
        if (subtitles.length === 0) {
            return { streams: streams ? streams : [] };
        }

        // Carrega as legendas de forma assíncrona
        const subtitlesPromises = subtitles.map(async (subtitle) => {
            try {
                const response = await fetch(subtitle.url);
                if (response.ok) {
                    const subtitleData = await response.text();
                    return { url: subtitle.url, lang: subtitle.lang, data: subtitleData };
                } else {
                    throw new Error(`Failed to load subtitle from ${subtitle.url}`);
                }
            } catch (error) {
                console.error(`Error loading subtitle: ${error.message}`);
                return null;
            }
        });

        // Aguarda todas as promessas das legendas serem resolvidas
        const loadedSubtitles = await Promise.all(subtitlesPromises);

        // Filtra legendas que foram carregadas com sucesso
        const validSubtitles = loadedSubtitles.filter((subtitle) => subtitle !== null);

        // Se não houver legendas carregadas, retorna apenas os streams
        if (validSubtitles.length === 0) {
            return { streams: streams ? streams : [] };
        }

        // Se houver legendas carregadas, envia o episódio com as legendas
        return { streams: streams ? streams : [], subtitles: validSubtitles };
    } catch (error) {
        console.error(`Erro ao buscar streams: ${error.message}`);
        return { streams: [] };
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

        // Se houver legendas, retorna o array de legendas com URLs válidas
        if (subtitles.length > 0) {
            // Formata as legendas com URLs acessíveis publicamente
            subtitles = subtitles.map((subtitle, index) => ({
                id: `${id}-${index}`, // Gera um ID único para cada legenda
                url: subtitle.url, // URL da legenda
                lang: subtitle.lang // Código de idioma da legenda
            }));
            
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
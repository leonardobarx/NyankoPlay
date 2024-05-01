const { addonBuilder } = require("stremio-addon-sdk");

// Definição do manifesto do addon
const manifest = {
  id: "community.Nyankoplay", // ID único do addon
  version: "0.0.2", // Versão do addon
  catalogs: [
    { type: "movie", id: "movies" }, // Catálogo de filmes
    { type: "series", id: "series" }, // Catálogo de séries
  ],
  resources: ["catalog", "stream", "meta"], // Recursos que o addon oferece (catálogos, streams e metadados)
  types: ["movie", "series"], // Tipos de conteúdo suportados (filmes e séries)
  name: "NyankoPlay Tokusatsu BR", // Nome do addon
  description: "Catálogo e stream de Tokusatsus em PTBR", // Descrição do addon
};

const builder = new addonBuilder(manifest);

const catalogs = [
    { id: "tt14377480", type: "series", name: "Kamen Rider Black Sun", genres: ["Legendado"], poster: null }, // Catálogo de séries
    

 // { id: "movies", type: "movie", name: "Filmes", poster: null }, // Catálogo de filmes
  //{ id: "tt0188340", type: "series", name: "Kamen Rider Kuuga", poster: null }, // Catálogo de séries
 // { id: "tt6982472", type: "series", name: "Kamen Rider Build", poster: null, }, // Catálogo de séries
];

// Manipulador para a requisição de busca de catálogos
builder.defineCatalogHandler(({ type, extra }) => {
  // Filtra os catálogos disponíveis pelo tipo especificado (filme ou série)
  const filteredCatalogs = catalogs.filter((catalog) => catalog.type === type);

  // Retorna um array de objetos contendo as informações dos catálogos
  return Promise.resolve({
    metas: filteredCatalogs.map((catalog) => ({
      id: catalog.id,
      name: catalog.name,
      type: catalog.type,
      poster: catalog.poster, // Incluir URL do pôster do catálogo se disponível
    })),
  });
});

// Manipulador para a requisição de streams
builder.defineStreamHandler(({ type, id }) => {
  try {
    // Dicionários que armazenam URLs de streams por tipo (filme ou série) e ID
    const movieStreams = {
      m1: { url: "URL_DO_STREAM_DO_FILME_1" },
      m2: { url: "URL_DO_STREAM_DO_FILME_2" },
      m3: { url: "URL_DO_STREAM_DO_FILME_3" },
      // ... outros filmes
    };

    const seriesStreams = {
      // Kamen Rider Kuuga
      "tt0188340:1:1": [{ url: "https://mangas.cloud/tokusatsus/Kamen-Rider/Kuuga/01.mp4", title: "Episódio 1 - mangas.cloud", season: 1, episode: 1 }],
      "tt0188340:1:2": [{ url: "https://mangas.cloud/tokusatsus/Kamen-Rider/Kuuga/02.mp4", title: "Episódio 2 - mangas.cloud", season: 1, episode: 2 }],
      "tt0188340:1:3": [{ url: "https://mangas.cloud/tokusatsus/Kamen-Rider/Kuuga/03.mp4", title: "Episódio 3 - mangas.cloud", season: 1, episode: 3 }],
      // Kamen Rider Black Sun
      "tt14377480:1:1": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/01%201080%20LEG.mkv", title: "Episódio-1-FHD-Legendado-[New Wave]", season: 1, episode: 1 }],
      "tt14377480:1:2": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/02%201080%20LEG.mkv", title: "Episódio-2-FHD-Legendado-[New Wave]", season: 1, episode: 2 }],
      "tt14377480:1:3": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/03%201080%20LEG.mkv", title: "Episódio-3-FHD-Legendado-[New Wave]", season: 1, episode: 3 }],
      "tt14377480:1:4": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/04%201080%20LEG.mkv", title: "Episódio-4-FHD-Legendado-[New Wave]", season: 1, episode: 4 }],
      "tt14377480:1:5": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/05%201080%20LEG.mkv", title: "Episódio-5-FHD-Legendado-[New Wave]", season: 1, episode: 5 }],
      "tt14377480:1:6": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/06%201080%20LEG.mkv", title: "Episódio-6-FHD-Legendado-[New Wave]", season: 1, episode: 6 }],
      "tt14377480:1:7": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/07%201080%20LEG.mkv", title: "Episódio-7-FHD-Legendado-[New Wave]", season: 1, episode: 7 }],
      "tt14377480:1:8": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/08%201080%20LEG.mkv", title: "Episódio-8-FHD-Legendado-[New Wave]", season: 1, episode: 8 }],
      "tt14377480:1:9": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/09%201080%20LEG.mkv", title: "Episódio-9-FHD-Legendado-[New Wave]", season: 1, episode: 9 }],
      "tt14377480:1:10": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/10%201080%20LEG.mkv", title: "Episódio-10-FHD-Legendado-[New Wave]", season: 1, episode: 10 }]

    };

    // Retorna os streams correspondentes ao tipo e id fornecidos
    return Promise.resolve({
      streams: type === "movie" ? movieStreams[id] ? [movieStreams[id]] : [] : seriesStreams[id] ? seriesStreams[id] : []
    });
  } catch (error) {
    // Captura e registra erros durante a busca por streams
    console.error(`Erro ao buscar streams: ${error.message}`);
    return Promise.resolve({ streams: [] }); // Retorna um array vazio de streams em caso de erro
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
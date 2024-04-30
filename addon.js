const { addonBuilder } = require("stremio-addon-sdk");

// Definição do manifesto do addon
const manifest = {
  id: "community.Nyankoplay", // ID único do addon
  version: "0.0.1", // Versão do addon
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
      "tt14377480:1:1": [{ url: "https://www.udrop.com/LFSk/Kamen_Rider_BLACK_SUN_S01E01_1080p_AMZN_WEB_DL_DDP5_1_H_264_0N0R3D1K31D0.mp4?download_token=9891a64083e804397a73a3d06ecfdf2676e76557136b7b40d65fee35ff8749b3", title: "Episódio-1-FHD-Legendado-Udrop", season: 1, episode: 1 }],
      "tt14377480:1:2": [{ url: "https://www.udrop.com/LFS5/Kamen_Rider_BLACK_SUN_S01E02_1080p_AMZN_WEB_DL_DDP5_1_H_264_0N0R3D1K31D0.mkv?download_token=3b40b7a488c539e6ad455df85ddf79e4d56b7e4946cc23ea96ac4ba56acf62c0", title: "Episódio-2-FHD-Legendado-Udrop", season: 1, episode: 2 }],
      "tt14377480:1:3": [{ url: "https://www.udrop.com/LFS2/Kamen_Rider_BLACK_SUN_S01E03_1080p_AMZN_WEB_DL_DDP5_1_H_264_0N0R3D1K31D0.mkv?download_token=225815e72685eb0c95f54935607fc4f5f3fbc8719de1ce8351f6c34954d296bc", title: "Episódio-3-FHD-Legendado-Udrop", season: 1, episode: 3 }],
      "tt14377480:1:4": [{ url: "https://www.udrop.com/LFRY/Kamen_Rider_BLACK_SUN_S01E04_1080p_AMZN_WEB_DL_DDP5_1_H_264_0N0R3D1K31D0.mkv?download_token=08c5a200b558cc4e71ebf37811f5969e4862cbf4c6ba47d1c7216078a9c28951", title: "Episódio-4-FHD-Legendado-Udrop", season: 1, episode: 4 }],
      "tt14377480:1:5": [{ url: "https://www.udrop.com/LFS3/Kamen_Rider_BLACK_SUN_S01E05_1080p_AMZN_WEB_DL_DDP5_1_H_264_0N0R3D1K31D0.mkv?download_token=0643563460e03b1e6b78c4aa4c950fb781930bc760a64301ce530dc7aff65643", title: "Episódio-5-FHD-Legendado-Udrop", season: 1, episode: 5 }],
      "tt14377480:1:6": [{ url: "https://www.udrop.com/LFS1/Kamen_Rider_BLACK_SUN_S01E06_1080p_AMZN_WEB_DL_DDP5_1_H_264_0N0R3D1K31D0.mkv?download_token=67de1776ec02b2c34ab385a336f97a4698adf7492c6c4229a0fc022680048074", title: "Episódio-6-FHD-Legendado-Udrop", season: 1, episode: 6 }],
      "tt14377480:1:7": [{ url: "https://www.udrop.com/LFRX/Kamen_Rider_BLACK_SUN_S01E07_1080p_AMZN_WEB_DL_DDP5_1_H_264_0N0R3D1K31D0.mkv?download_token=93c176cec259466a00ff6fbe0b4dde4ad2924c447a9599fede230735c6a6ec8a", title: "Episódio-7-FHD-Legendado-Udrop", season: 1, episode: 7 }],
      "tt14377480:1:8": [{ url: "https://www.udrop.com/LFS4/Kamen_Rider_BLACK_SUN_S01E08_1080p_AMZN_WEB_DL_DDP5_1_H_264_0N0R3D1K31D0.mkv?download_token=64c3c479f6b48e0bbf305e36fc6462cd2b43aa8212f4cf5b163b6ec32f32bde9", title: "Episódio-8-FHD-Legendado-Udrop", season: 1, episode: 8 }],
      "tt14377480:1:9": [{ url: "https://www.udrop.com/LFRZ/Kamen_Rider_BLACK_SUN_S01E09_1080p_AMZN_WEB_DL_DDP5_1_H_264_0N0R3D1K31D0.mkv?download_token=0d74262a3606893acaaf68c269915309f6ebbf039a515c8230ea985e4d7c56f6", title: "Episódio-9-FHD-Legendado-Udrop", season: 1, episode: 9 }],
      "tt14377480:1:10": [{ url: "https://www.udrop.com/LFS0/Kamen_Rider_BLACK_SUN_S01E10_1080p_AMZN_WEB_DL_DDP5_1_H_264_0N0R3D1K31D0.mkv?download_token=aca243265409cbb3b2cc1c53c33a96ddf376d75a009148057a4aa55195736f81", title: "Episódio-10-FHD-Legendado-Udrop", season: 1, episode: 10 }]

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
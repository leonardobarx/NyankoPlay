const catalogs = [
    { id: "tt14377480", type: "series", name: "Kamen Rider Black Sun", genres: ["Legendado"], poster: null },
    { id: "tt6982472", type: "series", name: "Kamen Rider Build", genres: ["Legendado"], poster: null },
]

const seriesStreams = {
     
// Kamen Rider Black Sun
      "tt14377480:1:1": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/01%201080%20LEG.mkv", title: "WEB-Episódio-1-FHD-Legendado-[New Wave]", season: 1, episode: 1 }],
      "tt14377480:1:2": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/02%201080%20LEG.mkv", title: "WEB-Episódio-2-FHD-Legendado-[New Wave]", season: 1, episode: 2 }],
      "tt14377480:1:3": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/03%201080%20LEG.mkv", title: "WEB-Episódio-3-FHD-Legendado-[New Wave]", season: 1, episode: 3 }],
      "tt14377480:1:4": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/04%201080%20LEG.mkv", title: "WEB-Episódio-4-FHD-Legendado-[New Wave]", season: 1, episode: 4 }],
      "tt14377480:1:5": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/05%201080%20LEG.mkv", title: "WEB-Episódio-5-FHD-Legendado-[New Wave]", season: 1, episode: 5 }],
      "tt14377480:1:6": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/06%201080%20LEG.mkv", title: "WEB-Episódio-6-FHD-Legendado-[New Wave]", season: 1, episode: 6 }],
      "tt14377480:1:7": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/07%201080%20LEG.mkv", title: "WEB-Episódio-7-FHD-Legendado-[New Wave]", season: 1, episode: 7 }],
      "tt14377480:1:8": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/08%201080%20LEG.mkv", title: "WEB-Episódio-8-FHD-Legendado-[New Wave]", season: 1, episode: 8 }],
      "tt14377480:1:9": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/09%201080%20LEG.mkv", title: "WEB-Episódio-9-FHD-Legendado-[New Wave]", season: 1, episode: 9 }],
      "tt14377480:1:10": [{ url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/10%201080%20LEG.mkv", title: "WEB-Episódio-10-FHD-Legendado-[New Wave]", season: 1, episode: 10 }],

//Kamen Rider Build
       "tt6982472:1:1": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E01%20%27These%20Guys%20Are%20A%20Best%20Match%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "WEB-Episódio-1-Legendado-[New Wave]", season: 1, episode: 1 }],
       "tt6982472:1:2": [{ url: "https://archive.org/download/kr-b-pt-02/KR-B-PT%2002.mkv", title: "WEB-Episódio-2-Legendado-[New Wave]", season: 1, episode: 2 }],
       "tt6982472:1:3": [{ url: "https://archive.org/download/kr-b-pt-03/KR-B-PT%2003.mkv", title: "WEB-Episódio-3-Legendado-[New Wave]", season: 1, episode: 3 }],
       "tt6982472:1:4": [{ url: "https://archive.org/download/kr-b-pt-04/KR-B-PT%2004.mkv", title: "WEB-Episódio-4-Legendado-[New Wave]", season: 1, episode: 4 }],
       "tt6982472:1:5": [{ url: "https://archive.org/download/kr-b-pt-05/KR-B-PT%2005.mkv", title: "WEB-Episódio-5-Legendado-[New Wave]", season: 1, episode: 5 }],
    };



const seriesSubtitles = {
//Kamen rider build legendas
    "tt6982472:1:1": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2001%20%5B0FA14DE4%5D.srt", lang: "por", label: "Portugues" },

                    ]

       // { url: "https://exemplo.com/legenda-en.srt", lang: "eng", label: "Inglês" }
};
module.exports = { catalogs, seriesStreams, seriesSubtitles };

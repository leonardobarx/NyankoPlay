const catalogs = [
    { id: "tt1556175", type: "movie", name: " Kamen Rider × Kamen Rider W & Decade", genres: ["Tokusatsus"], poster: null },
    { id: "tt14379088", type: "movie", name: "Shin Kamen Rider 2023", genres: ["Tokusatsus"], poster: null },
]
const movieStreams = {
    "tt14379088": [{ infoHash: "17a10d72c9980d67e338f34bcfc87ea9519dfb48", title: "Torrent-FullHD-Nyaa", season: 1, episode: 1 }],
    "tt1556175": [{ url: "https://archive.org/download/ozc-live-kamen-rider-x-kamen-rider-w-decade-movie-wars-2010-720p/%5BOZC-Live%5DKamen%20Rider%20%C3%97%20Kamen%20Rider%20W%20%26%20Decade%20-%20Movie%20Wars%202010%20%5B720p%5D.mkv", title: "WEB-HD-JP", },
                  { url: "https://archive.org/download/KamenRiderXKamenRiderWDecadeMovieWars2010/Kamen%20Rider%20%C3%97%20Kamen%20Rider%20W%20%26%20Decade%20-%20Movie%20Wars%202010.mp4", title: "WEB-SD-JP",}],
};

const movieSubtitles = {
   
    "tt1556175": [
{ url: "https://archive.org/download/kamen-rider-x-kamen-rider-w-decade/Kamen_Rider_%C3%97_Kamen_Rider_W_%26_Decade.srt", lang: "Português BR", label: "Português" },
//space for new language
],
};

module.exports = { catalogs, movieStreams, movieSubtitles };



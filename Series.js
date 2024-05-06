const catalogs = [
    { id: "tt14893284", type: "series", name: "Kamen Rider Revice", genres: ["Tokusatsus"], poster: "https://pbs.twimg.com/media/FQc3VYBacAsxnBR?format=jpg&name=large" },
    { id: "tt14377480", type: "series", name: "Kamen Rider Black Sun", genres: ["Tokusatsus"], poster: null },
    { id: "tt6982472", type: "series", name: "Kamen Rider Build", genres: ["Tokusatsus"], poster: null },
    { id: "tt1483620", type: "series", name: "Kamen Rider W", genres: ["Tokusatsus"], poster: null },
]



const seriesStreams = {

      // kamen rider revice streams
"tt14893284:1:1": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2001v2%20%5BFE55C8BE%5D.mkv", title: "WEB-Ep-01-[Audio JP] ", season: 1, episode: 1 }],
"tt14893284:1:2": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2002v2%20%5BA5CC0188%5D.mkv", title: "WEB-Ep-02-[Audio JP] ", season: 1, episode: 2 }],
"tt14893284:1:3": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2003v2%20%5B38397236%5D.mkv", title: "WEB-Ep-03-[Audio JP] ", season: 1, episode: 3 }],
"tt14893284:1:4": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2004v2%20%5BC78BE581%5D.mkv", title: "WEB-Ep-04-[Audio JP] ", season: 1, episode: 4 }],
"tt14893284:1:5": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2005v2%20%5BBD83E0C8%5D.mkv", title: "WEB-Ep-05-[Audio JP] ", season: 1, episode: 5 }],
"tt14893284:1:6": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2006v2%20%5BF2CE04DC%5D.mkv", title: "WEB-Ep-06-[Audio JP] ", season: 1, episode: 6 }],
"tt14893284:1:7": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2007v2%20%5B2A97B496%5D.mkv", title: "WEB-Ep-07-[Audio JP] ", season: 1, episode: 7 }],
"tt14893284:1:8": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2008v2%20%5B273CD539%5D.mkv", title: "WEB-Ep-08-[Audio JP] ", season: 1, episode: 8 }],
"tt14893284:1:9": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2009v2%20%5B8C8AF2F7%5D.mkv", title: "WEB-Ep-09-[Audio JP] ", season: 1, episode: 9 }],
"tt14893284:1:10": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2010v2%20%5B5A6E7E0E%5D.mkv", title: "WEB-Ep-10-[Audio JP] ", season: 1, episode: 10 }],
"tt14893284:1:11": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2011v2%20%5B8BA498F2%5D.mkv", title: "WEB-Ep-11-[Audio JP] ", season: 1, episode: 11 }],
"tt14893284:1:12": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2012v2%20%5BFFC2B8AA%5D.mkv", title: "WEB-Ep-12-[Audio JP] ", season: 1, episode: 12 }],
"tt14893284:1:13": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2013v2%20%5BA6EF9431%5D.mkv", title: "WEB-Ep-13-[Audio JP] ", season: 1, episode: 13 }],
"tt14893284:1:14": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2014v2%20%5BEF1032E3%5D.mkv", title: "WEB-Ep-14-[Audio JP] ", season: 1, episode: 14 }],
"tt14893284:1:15": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2015v2%20%5B6040ED7C%5D.mkv", title: "WEB-Ep-15-[Audio JP] ", season: 1, episode: 15 }],
"tt14893284:1:16": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2016v2%20%5B2D52D61A%5D.mkv", title: "WEB-Ep-16-[Audio JP] ", season: 1, episode: 16 }],
"tt14893284:1:17": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2017v2%20%5BCC573ABD%5D.mkv", title: "WEB-Ep-17-[Audio JP] ", season: 1, episode: 17 }],
"tt14893284:1:18": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2018v2%20%5BDC2FF79B%5D.mkv", title: "WEB-Ep-18-[Audio JP] ", season: 1, episode: 18 }],
"tt14893284:1:19": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2019v2%20%5BB1AABFBE%5D.mkv", title: "WEB-Ep-19-[Audio JP] ", season: 1, episode: 19 }],
"tt14893284:1:20": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2020v2%20%5B40104A08%5D.mkv", title: "WEB-Ep-20-[Audio JP] ", season: 1, episode: 20 }],
"tt14893284:1:21": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2021v2%20%5B115EB496%5D.mkv", title: "WEB-Ep-21-[Audio JP] ", season: 1, episode: 21 }],
"tt14893284:1:22": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2022v2%20%5BB39511A8%5D.mkv", title: "WEB-Ep-22-[Audio JP] ", season: 1, episode: 22 }],
"tt14893284:1:23": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2023v2%20%5B794DF5F2%5D.mkv", title: "WEB-Ep-23-[Audio JP] ", season: 1, episode: 23 }],
"tt14893284:1:24": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2024v2%20%5BEAD2FEC3%5D.mkv", title: "WEB-Ep-24-[Audio JP] ", season: 1, episode: 24 }],
"tt14893284:1:25": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2025v3%20%5B04E89F88%5D.mkv", title: "WEB-Ep-25-[Audio JP] ", season: 1, episode: 25 }],
"tt14893284:1:26": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2026v2%20%5B49E7803F%5D.mkv", title: "WEB-Ep-26-[Audio JP] ", season: 1, episode: 26 }],
"tt14893284:1:27": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2027v2%20%5BD0012089%5D.mkv", title: "WEB-Ep-27-[Audio JP] ", season: 1, episode: 27 }],
"tt14893284:1:28": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2028v2%20%5BC6D9D5F6%5D.mkv", title: "WEB-Ep-28-[Audio JP] ", season: 1, episode: 28 }],
"tt14893284:1:29": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2029v3%20%5B22707206%5D.mkv", title: "WEB-Ep-29-[Audio JP] ", season: 1, episode: 29 }],
"tt14893284:1:30": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2030v2%20%5BB3DC1CA1%5D.mkv", title: "WEB-Ep-30-[Audio JP] ", season: 1, episode: 30 }],
"tt14893284:1:31": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2031v2%20%5B6E04925C%5D.mkv", title: "WEB-Ep-31-[Audio JP] ", season: 1, episode: 31 }],
"tt14893284:1:32": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2032v2%20%5B1D7C1A17%5D.mkv", title: "WEB-Ep-32-[Audio JP] ", season: 1, episode: 32 }],
"tt14893284:1:33": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2033v2%20%5B2C96D86D%5D.mkv", title: "WEB-Ep-33-[Audio JP] ", season: 1, episode: 33 }],
"tt14893284:1:34": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2034v2%20%5BE83FF2D0%5D.mkv", title: "WEB-Ep-34-[Audio JP] ", season: 1, episode: 34 }],
"tt14893284:1:35": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2035v2%20%5B1621D5C4%5D.mkv", title: "WEB-Ep-35-[Audio JP] ", season: 1, episode: 35 }],
"tt14893284:1:36": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2036v3%20%5B0EBA52D3%5D.mkv", title: "WEB-Ep-36-[Audio JP] ", season: 1, episode: 36 }],
"tt14893284:1:37": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2037v2%20%5BA67880B9%5D.mkv", title: "WEB-Ep-37-[Audio JP] ", season: 1, episode: 37 }],
"tt14893284:1:38": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2038v2%20%5BED478124%5D.mkv", title: "WEB-Ep-38-[Audio JP] ", season: 1, episode: 38 }],
"tt14893284:1:39": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2039v2%20%5B6C58985E%5D.mkv", title: "WEB-Ep-39-[Audio JP] ", season: 1, episode: 39 }],
"tt14893284:1:40": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2040v2%20%5BFE2985FE%5D.mkv", title: "WEB-Ep-40-[Audio JP] ", season: 1, episode: 40 }],
"tt14893284:1:41": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2041v3%20%5B18C33D1A%5D.mkv", title: "WEB-Ep-41-[Audio JP] ", season: 1, episode: 41 }],
"tt14893284:1:42": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2042v2%20%5B9A8796DA%5D.mkv", title: "WEB-Ep-42-[Audio JP] ", season: 1, episode: 42 }],
"tt14893284:1:43": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2043v3%20%5B9EF81222%5D.mkv", title: "WEB-Ep-43-[Audio JP] ", season: 1, episode: 43 }],
"tt14893284:1:44": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2044v2%20%5B0FEB65F5%5D.mkv", title: "WEB-Ep-44-[Audio JP] ", season: 1, episode: 44 }],
"tt14893284:1:45": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2045v2%20%5BADA74DCD%5D.mkv", title: "WEB-Ep-45-[Audio JP] ", season: 1, episode: 45 }],
"tt14893284:1:46": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2046v2%20%5B24268C1C%5D.mkv", title: "WEB-Ep-46-[Audio JP] ", season: 1, episode: 46 }],
"tt14893284:1:47": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2047v2%20%5BE746DE44%5D.mkv", title: "WEB-Ep-47-[Audio JP] ", season: 1, episode: 47 }],
"tt14893284:1:48": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2048v2%20%5BE38CD981%5D.mkv", title: "WEB-Ep-48-[Audio JP] ", season: 1, episode: 48 }],
"tt14893284:1:49": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2049v2%20%5B556542DC%5D.mkv", title: "WEB-Ep-49-[Audio JP] ", season: 1, episode: 49 }],
"tt14893284:1:50": [{ url: "https://archive.org/download/volcano-subs-kamen-rider-beyond-generations-597-b-89-e-2/%5BGeoSubs%5D%20Kamen%20Rider%20Revice%20-%2050%20%28Finale%29v3%20%5BAFC6ABE2%5D.mkv", title: "WEB-Ep-50-[Audio JP] ", season: 1, episode: 50 }],


     
// Kamen Rider Black Sun - [New Wave]
// Kamen Rider Black Sun JP
      "tt14377480:1:1": [{ url: "https://archive.org/download/09_20240420/01.mkv", title: "WEB-FHD-JP", season: 1, episode: 1 },
                         { url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/01%201080%20LEG.mkv", title: "WEB-FHD-Subbed-PTBR", season: 1, episode: 1 },
                         { url: "https://cldup.com/vR8ZVucBOj.mp4", title: "WEB-SD-Subbed-PTBR", season: 1, episode: 1 },],
      "tt14377480:1:2": [{ url: "https://archive.org/download/09_20240420/02.mkv", title: "WEB-FHD-JP", season: 1, episode: 2 },
                         { url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/02%201080%20LEG.mkv", title: "WEB-FHD-Subbed-PTBR", season: 1, episode: 2 },
                         { url: "https://cldup.com/bmXw8bfs4x.mp4", title: "WEB-SD-Subbed-PTBR", season: 1, episode: 2 },],
      "tt14377480:1:3": [{ url: "https://archive.org/download/09_20240420/03.mkv", title: "WEB-FHD-JP", season: 1, episode: 3 },
                         { url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/03%201080%20LEG.mkv", title: "WEB-FHD-Subbed-PTBR", season: 1, episode: 3 },
                         { url: "https://cldup.com/KjHQ0MDnDK.mp4", title: "WEB-SD-Subbed-PTBR", season: 1, episode: 3 },],
      "tt14377480:1:4": [{ url: "https://archive.org/download/09_20240420/04.mkv", title: "WEB-FHD-JP", season: 1, episode: 4 },
                         { url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/04%201080%20LEG.mkv", title: "WEB-FHD-Subbed-PTBR", season: 1, episode: 4 },
                         { url: "https://cldup.com/8rTBlBCddG.mp4", title: "WEB-SD-Subbed-PTBR", season: 1, episode: 4 },],
      "tt14377480:1:5": [{ url: "https://archive.org/download/09_20240420/05.mkv", title: "WEB-FHD-JP", season: 1, episode: 5 },
                         { url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/05%201080%20LEG.mkv", title: "WEB-FHD-Subbed-PTBR", season: 1, episode: 5 },
                         { url: "https://cldup.com/RXnPePOeGD.mp4", title: "WEB-SD-Subbed-PTBR", season: 1, episode: 5 },],
      "tt14377480:1:6": [{ url: "https://archive.org/download/09_20240420/06.mkv", title: "WEB-FHD-JP", season: 1, episode: 6 },
                         { url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/06%201080%20LEG.mkv", title: "WEB-FHD-Subbed-PTBR", season: 1, episode: 6 },
                         { url: "https://cldup.com/RbQBDhbFl9.mp4", title: "WEB-SD-Subbed-PTBR", season: 1, episode: 6 },],
      "tt14377480:1:7": [{ url: "https://archive.org/download/09_20240420/07.mkv", title: "WEB-FHD-JP", season: 1, episode: 7 },
                         { url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/07%201080%20LEG.mkv", title: "WEB-FHD-Subbed-PTBR", season: 1, episode: 7 },
                         { url: "https://cldup.com/-lzFeOY1ZE.mp4", title: "WEB-SD-Subbed-PTBR", season: 1, episode: 7 },],
      "tt14377480:1:8": [{ url: "https://archive.org/download/09_20240420/08.mkv", title: "WEB-FHD-JP", season: 1, episode: 8 },
                         { url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/08%201080%20LEG.mkv", title: "WEB-FHD-Subbed-PTBR", season: 1, episode: 8 },
                         { url: "https://cldup.com/EJg3gcHfU0.mp4", title: "WEB-SD-Subbed-PTBR", season: 1, episode: 8 },],
      "tt14377480:1:9": [{ url: "https://archive.org/download/09_20240420/09.mkv", title: "WEB-FHD-JP", season: 1, episode: 9 },
                         { url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/09%201080%20LEG.mkv", title: "WEB-FHD-Subbed-PTBR", season: 1, episode: 9 },
                         { url: "https://cldup.com/aJ1g31BXqJ.mp4", title: "WEB-SD-Subbed-PTBR", season: 1, episode: 9 },],
      "tt14377480:1:10": [{ url: "https://archive.org/download/09_20240420/10.mkv", title: "WEB-FHD-JP", season: 1, episode: 10 },
                         { url: "https://archive.org/download/08-1080-leg/KRBS-LEG-1080/10%201080%20LEG.mkv", title: "WEB-FHD-Subbed-PTBR", season: 1, episode: 10 },
                         { url: "https://cldup.com/KxD-y6Mjuy.mp4", title: "WEB-SD-Subbed-PTBR", season: 1, episode: 10 },],

//Kamen Rider Build
"tt6982472:1:1": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E01%20%27These%20Guys%20Are%20A%20Best%20Match%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 01 Kamen Rider Build JP", season: 1, episode: 1 }],
"tt6982472:1:2": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E02%20%27Innocent%20Runaway%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 02 Kamen Rider Build JP", season: 1, episode: 2 }],
"tt6982472:1:3": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E03%20%27The%20Borderline%20of%20Heroism%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 03 Kamen Rider Build JP", season: 1, episode: 3 }],
"tt6982472:1:4": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E04%20%27When%20There%27s%20Zero%20Testimony%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 04 Kamen Rider Build JP", season: 1, episode: 4 }],
"tt6982472:1:5": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E05%20%27Unsteady%20Identity%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 05 Kamen Rider Build JP", season: 1, episode: 5 }],
"tt6982472:1:6": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E06%20%27Furious%20Moonsault%27%20%5B1080p%5D.mkv", title: "Ep 06 Kamen Rider Build JP", season: 1, episode: 6 }],
"tt6982472:1:7": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E07%20%27The%20Devil%27s%20Scientist%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 07 Kamen Rider Build JP", season: 1, episode: 7 }],
"tt6982472:1:8": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E08%20%27What%20The%20Memories%20Tell%20You%27%20%5B1080p%5D.mkv", title: "Ep 08 Kamen Rider Build JP", season: 1, episode: 8 }],
"tt6982472:1:9": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E09%20%27The%20Trap%20of%20Project%20Build%27%20%5B1080p%5D.mkv", title: "Ep 09 Kamen Rider Build JP", season: 1, episode: 9 }],
"tt6982472:1:10": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E10%20%27Technology%20of%20Destruction%27%20%5B1080p%5D.mkv", title: "Ep 10 Kamen Rider Build JP", season: 1, episode: 10 }],
"tt6982472:1:11": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E11%20%27The%20Blazing%20Dragon%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 11 Kamen Rider Build JP", season: 1, episode: 11 }],
"tt6982472:1:12": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E12%20%27The%20Scent%20of%20Conspiracy%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 12 Kamen Rider Build JP", season: 1, episode: 12 }],
"tt6982472:1:13": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E13%20%27Who%20Removes%20the%20Veil%27%20%5B1080p%5D.mkv", title: "Ep 13 Kamen Rider Build JP", season: 1, episode: 13 }],
"tt6982472:1:14": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E14%20%27The%20False%20Kamen%20Rider%27%20%5B1080p%5D.mkv", title: "Ep 14 Kamen Rider Build JP", season: 1, episode: 14 }],
"tt6982472:1:15": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E15%20%27The%20Judgement%20of%20Kiryuu%20Sento%21%27%20%5B1080p%5D.mkv", title: "Ep 15 Kamen Rider Build JP", season: 1, episode: 15 }],
"tt6982472:1:16": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E16%20%27The%20Weaponized%20Hero%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 16 Kamen Rider Build JP", season: 1, episode: 16 }],
"tt6982472:1:17": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E17%20%27The%20Rider%20War%20Outbreak%27%20%5B1080p%5D.mkv", title: "Ep 17 Kamen Rider Build JP", season: 1, episode: 17 }],
"tt6982472:1:18": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E18%20%27The%20Golden%20Soldier%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 18 Kamen Rider Build JP", season: 1, episode: 18 }],
"tt6982472:1:19": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E19%20%27The%20Forbidden%20Item%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 19 Kamen Rider Build JP", season: 1, episode: 19 }],
"tt6982472:1:20": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E20%20%27Devil%20Trigger%27%20%5B1080p%5D.mkv", title: "Ep 20 Kamen Rider Build JP", season: 1, episode: 20 }],
"tt6982472:1:21": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E21%20%27The%20Unstoppable%20Hazard%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 21 Kamen Rider Build JP", season: 1, episode: 21 }],
"tt6982472:1:22": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E22%20%27Tearful%20Victory%27%20%5B1080p%5D.mkv", title: "Ep 22 Kamen Rider Build JP", season: 1, episode: 22 }],
"tt6982472:1:23": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E23%20%27The%20Western%20Phantom%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 23 Kamen Rider Build JP", season: 1, episode: 23 }],
"tt6982472:1:24": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E24%20%27The%20Man%20Called%20Rogue%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 24 Kamen Rider Build JP", season: 1, episode: 24 }],
"tt6982472:1:25": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E25%20%27An%20Idol%20Awakens%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 25 Kamen Rider Build JP", season: 1, episode: 25 }],
"tt6982472:1:26": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E26%20%27Treacherous%20Deathmatch%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 26 Kamen Rider Build JP", season: 1, episode: 26 }],
"tt6982472:1:27": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E27%20%27The%20Hero%27s%20Counterattack%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 27 Kamen Rider Build JP", season: 1, episode: 27 }],
"tt6982472:1:28": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E28%20%27The%20Genius%20Comes%20On%20A%20Tank%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 28 Kamen Rider Build JP", season: 1, episode: 28 }],
"tt6982472:1:29": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E29%20%27The%20Bell%20Tolls%2C%20The%20Curtain%20Rises%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 29 Kamen Rider Build JP", season: 1, episode: 29 }],
"tt6982472:1:30": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E30%20%27The%20Truth%20of%20the%20Pandora%27s%20Box%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 30 Kamen Rider Build JP", season: 1, episode: 30 }],
"tt6982472:1:31": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E31%20%27Surging%20Magma%21%27%20%5B1080p%5D.mkv", title: "Ep 31 Kamen Rider Build JP", season: 1, episode: 31 }],
"tt6982472:1:32": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E32%20%27A%20Pre-Programmed%20Tragedy%27%20%5B1080p%5D.mkv", title: "Ep 32 Kamen Rider Build JP", season: 1, episode: 32 }],
"tt6982472:1:33": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E33%20%27Evol%2C%20the%20Ultimate%20Weapon%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 33 Kamen Rider Build JP", season: 1, episode: 33 }],
"tt6982472:1:34": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E34%20%27The%20Best%20Match%2C%20Separated%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 34 Kamen Rider Build JP", season: 1, episode: 34 }],
"tt6982472:1:35": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E35%20%27Tower%20of%20Destruction%27%20%5B1080p%5D.mkv", title: "Ep 35 Kamen Rider Build JP", season: 1, episode: 35 }],
"tt6982472:1:36": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E36%20%27Evolt%20Hunts%20Planets%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 36 Kamen Rider Build JP", season: 1, episode: 36 }],
"tt6982472:1:37": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E37%20%27The%20Ultimate%20Phase%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 37 Kamen Rider Build JP", season: 1, episode: 37 }],
"tt6982472:1:38": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E38%20%27Mad%20World%27%20%5B1080p%5D.mkv", title: "Ep 38 Kamen Rider Build JP", season: 1, episode: 38 }],
"tt6982472:1:39": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E39%20%27The%20Unstoppable%20Genius%27%20%5B1080p%5D.mkv", title: "Ep 39 Kamen Rider Build JP", season: 1, episode: 39 }],
"tt6982472:1:40": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E40%20%27Revolution%20of%20the%20Apocalypse%27%20%5B1080p%5D.mkv", title: "Ep 40 Kamen Rider Build JP", season: 1, episode: 40 }],
"tt6982472:1:41": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E41%20%27The%20Truth%20Behind%20Best%20Matches%27%20%5B1080p%5D.mkv", title: "Ep 41 Kamen Rider Build JP", season: 1, episode: 41 }],
"tt6982472:1:42": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E42%20%27Legacy%20of%20Doubt%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 42 Kamen Rider Build JP", season: 1, episode: 42 }],
"tt6982472:1:43": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E43%20%27The%20Other%20Build%27%20%5B1080p%5D.mkv", title: "Ep 43 Kamen Rider Build JP", season: 1, episode: 43 }],
"tt6982472:1:44": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E44%20%27The%20End%20of%20Evolt%27%20%5B1080p%5D.mkv", title: "Ep 44 Kamen Rider Build JP", season: 1, episode: 44 }],
"tt6982472:1:45": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E45%20%27Hope%27s%20Scientist%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 45 Kamen Rider Build JP", season: 1, episode: 45 }],
"tt6982472:1:46": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E46%20%27An%20Oath%20To%20Be%20The%20One%27%20%5B1080p%5D.mkv", title: "Ep 46 Kamen Rider Build JP", season: 1, episode: 46 }],
"tt6982472:1:47": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E47%20%27Subzero%20Flame%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 47 Kamen Rider Build JP", season: 1, episode: 47 }],
"tt6982472:1:48": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E48%20%27To%20A%20World%20of%20Love%20and%20Peace%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 48 Kamen Rider Build JP", season: 1, episode: 48 }],
"tt6982472:1:49": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E49%20%27The%20World%20Build%20Created%27%20%5B1080p%5D%5Bv2%5D.mkv", title: "Ep 49 Kamen Rider Build JP", season: 1, episode: 49 }],




//Kamen rider w streams



"tt1483620:1:1": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E01%20%27W%27s%20Search%20-%20Two%20Detectives%20in%20One%27%20%5B720p%5D.mkv", title: "Ep 01 Kamen Rider W - 720p - Web", season: 1, episode: 1 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/01.mp4", title: "Ep 01 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 1 }],
"tt1483620:1:2": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E02%20%27W%27s%20Search%20-%20The%20One%20Who%20Makes%20the%20City%20Cry%27%20%5B720p%5D.mkv", title: "Ep 02 Kamen Rider W - 720p - Web", season: 1, episode: 2 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/02.mp4", title: "Ep 02 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 2 }],
"tt1483620:1:3": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E03%20%27Don%27t%20Touch%20the%20M%20-%20How%20To%20Get%20Into%20Heaven%27%20%5B720p%5D.mkv", title: "Ep 03 Kamen Rider W - 720p - Web", season: 1, episode: 3 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/03.mp4", title: "Ep 03 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 3 }],
"tt1483620:1:4": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E04%20%27Don%27t%20Touch%20the%20M%20-%20Betting%20on%20Joker%27%20%5B720p%5D.mkv", title: "Ep 04 Kamen Rider W - 720p - Web", season: 1, episode: 4 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/04.mp4", title: "Ep 04 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 4 }],
"tt1483620:1:5": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E05%20%27Girl...%20A%20-%20Papa%27s%20a%20Kamen%20Rider%27%20%5B720p%5D.mkv", title: "Ep 05 Kamen Rider W - 720p - Web", season: 1, episode: 5 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/05.mp4", title: "Ep 05 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 5 }],
"tt1483620:1:6": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E06%20%27The%20F%20Afterglow%20-%20Who%20Can%20Stop%20it%27%20%5B720p%5D.mkv", title: "Ep 06 Kamen Rider W - 720p - Web", season: 1, episode: 6 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/06.mp4", title: "Ep 06 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 6 }],
"tt1483620:1:7": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E07%20%27No%20One%20Can%20Stop%20it%20-%20Revealed%20Mystery%27%20%5B720p%5D.mkv", title: "Ep 07 Kamen Rider W - 720p - Web", season: 1, episode: 7 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/07.mp4", title: "Ep 07 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 7 }],
"tt1483620:1:8": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E08%20%27Find%20the%20C-Intercepter%20-%20The%20Remodeled%20Academy%27%20%5B720p%5D.mkv", title: "Ep 08 Kamen Rider W - 720p - Web", season: 1, episode: 8 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/08.mp4", title: "Ep 08 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 8 }],
"tt1483620:1:9": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E09%20%27The%20O%20Chain%20-%20Who%20Does%20the%20Tidal%20Wave%20of%20Tears%20Remind%20of%20%27%20%5B720p%5D.mkv", title: "Ep 09 Kamen Rider W - 720p - Web", season: 1, episode: 9 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/09.mp4", title: "Ep 09 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 9 }],
"tt1483620:1:10": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E10%20%27The%20Anomalous%20Core%20Medicine%20-%20The%20Power%20of%20Love%20that%20Protects%20the%20Capital%20%27%20%5B720p%5D.mkv", title: "Ep 10 Kamen Rider W - 720p - Web", season: 1, episode: 10 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/10.mp4", title: "Ep 10 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 10 }],
"tt1483620:1:11": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E11%20%27The%20Big%20Event%20Launch%20-%20The%20Identity%20of%20the%20Double%20%27%20%5B720p%5D.mkv", title: "Ep 11 Kamen Rider W - 720p - Web", season: 1, episode: 11 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/11.mp4", title: "Ep 11 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 11 }],
"tt1483620:1:12": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E12%20%27The%20Dancing%20Hero%20-%20How%20the%20Dark%20Begins%20to%20Move%20%27%20%5B720p%5D.mkv", title: "Ep 12 Kamen Rider W - 720p - Web", season: 1, episode: 12 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/12.mp4", title: "Ep 12 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 12 }],
"tt1483620:1:13": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E13%20%27The%20Warrior%20Awakens%20-%20Don%27t%20Let%20Go%20of%20Your%20Dream%20%27%20%5B720p%5D.mkv", title: "Ep 13 Kamen Rider W - 720p - Web", season: 1, episode: 13 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/13.mp4", title: "Ep 13 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 13 }],
"tt1483620:1:14": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E14%20%27The%20Fading%20Bonds%20-%20Protect%20the%20City%20of%20Tears%20%27%20%5B720p%5D.mkv", title: "Ep 14 Kamen Rider W - 720p - Web", season: 1, episode: 14 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/14.mp4", title: "Ep 14 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 14 }],
"tt1483620:1:15": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E15%20%27The%20Fugitives%20-%20The%20Warrior%20Lost%20%27%20%5B720p%5D.mkv", title: "Ep 15 Kamen Rider W - 720p - Web", season: 1, episode: 15 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/15.mp4", title: "Ep 15 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 15 }],
"tt1483620:1:16": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E16%20%27The%20Graffiti%20That%20Started%20to%20Move%20-%20Rebellion%20%27%20%5B720p%5D.mkv", title: "Ep 16 Kamen Rider W - 720p - Web", season: 1, episode: 16 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/16.mp4", title: "Ep 16 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 16 }],
"tt1483620:1:17": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E17%20%27The%20Doll%20Has%20on%20Its%20Back%20-%20What%20Can%20Be%20Seen%20Beyond%20the%20Pain%20%27%20%5B720p%5D.mkv", title: "Ep 17 Kamen Rider W - 720p - Web", season: 1, episode: 17 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/17.mp4", title: "Ep 17 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 17 }],
"tt1483620:1:18": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E18%20%27The%20Dog%20Fight%20%28Noel%20Gallagher%29%20-%20When%20The%20Sky%20Tears%20%27%20%5B720p%5D.mkv", title: "Ep 18 Kamen Rider W - 720p - Web", season: 1, episode: 18 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/18.mp4", title: "Ep 18 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 18 }],
"tt1483620:1:19": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E19%20%27The%20Museum%20The%20mm%20Has%20Disappeared%20-%20What%20Is%20Waiting%20for%20the%20Sound%20of%20the%20Scream%20%27%20%5B720p%5D.mkv", title: "Ep 19 Kamen Rider W - 720p - Web", season: 1, episode: 19 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/19.mp4", title: "Ep 19 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 19 }],
"tt1483620:1:20": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E20%20%27The%20Traitorous%20Robo%20-%20Who%20Does%20the%20Graffiti%20Belong%20to%20%27%20%5B720p%5D.mkv", title: "Ep 20 Kamen Rider W - 720p - Web", season: 1, episode: 20 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/20.mp4", title: "Ep 20 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 20 }],
"tt1483620:1:21": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E21%20%27The%20Lonely%20Fang%20-%20The%20Abyss%20%27%20%5B720p%5D.mkv", title: "Ep 21 Kamen Rider W - 720p - Web", season: 1, episode: 21 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/21.mp4", title: "Ep 21 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 21 }],
"tt1483620:1:22": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E22%20%27The%20Revelation%20of%20Mystery%20-%20The%20Prophet%20%27%20%5B720p%5D.mkv", title: "Ep 22 Kamen Rider W - 720p - Web", season: 1, episode: 22 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/22.mp4", title: "Ep 22 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 22 }],
"tt1483620:1:23": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E23%20%27The%20HardBoiled%20Black%20Comedy%20-%20Show%20Must%20Go%20On%20%27%20%5B720p%5D.mkv", title: "Ep 23 Kamen Rider W - 720p - Web", season: 1, episode: 23 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/23.mp4", title: "Ep 23 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 23 }],
"tt1483620:1:24": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E24%20%27The%20Abandoned%20Utopia%20-%20Who%20Are%20the%20Prosecutors%20%27%20%5B720p%5D.mkv", title: "Ep 24 Kamen Rider W - 720p - Web", season: 1, episode: 24 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/24.mp4", title: "Ep 24 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 24 }],
"tt1483620:1:25": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E25%20%27The%20Identity%20of%20the%20Double%20%28The%20King%20of%20Destiny%29%20-%20And%20the%20Lost%20Memory%27%20%5B720p%5D.mkv", title: "Ep 25 Kamen Rider W - 720p - Web", season: 1, episode: 25 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/25.mp4", title: "Ep 25 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 25 }],
"tt1483620:1:26": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E26%20%27The%20Dessert%20Singer%20-%20The%20Crying%20Hero%20%27%20%5B720p%5D.mkv", title: "Ep 26 Kamen Rider W - 720p - Web", season: 1, episode: 26 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/26.mp4", title: "Ep 26 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 26 }],
"tt1483620:1:27": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E27%20%27The%20W%20Search%20%28Philip%27s%20Search%29%20-%20The%20One%20Who%20Protects%20the%20City%27s%20Peace%20%27%20%5B720p%5D.mkv", title: "Ep 27 Kamen Rider W - 720p - Web", season: 1, episode: 27 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/27.mp4", title: "Ep 27 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 27 }],
"tt1483620:1:28": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E28%20%27The%20Abandoned%20Utopia%20-%20What%20Is%20in%20the%20Box%20%27%20%5B720p%5D.mkv", title: "Ep 28 Kamen Rider W - 720p - Web", season: 1, episode: 28 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/28.mp4", title: "Ep 28 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 28 }],
"tt1483620:1:29": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E29%20%27The%20O%20Chain%20-%20The%20A%20Wings%20of%20the%20Lonely%20%27%20%5B720p%5D.mkv", title: "Ep 29 Kamen Rider W - 720p - Web", season: 1, episode: 29 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/29.mp4", title: "Ep 29 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 29 }],
"tt1483620:1:30": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E30%20%27The%20Return%20of%20the%20Phillip%20-%20The%20Boy%20Came%20Back%20%27%20%5B720p%5D.mkv", title: "Ep 30 Kamen Rider W - 720p - Web", season: 1, episode: 30 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/30.mp4", title: "Ep 30 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 30 }],
"tt1483620:1:31": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E31%20%27L%27s%20Secret%20-%20The%20Hidden%20Path%20to%20the%20End%20%27%20%5B720p%5D.mkv", title: "Ep 31 Kamen Rider W - 720p - Web", season: 1, episode: 31 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/31.mp4", title: "Ep 31 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 31 }],
"tt1483620:1:32": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E32%20%27The%20Big%20Fish%20Bite%20-%20The%20Last%20Great%20Decisive%20Battle%20%27%20%5B720p%5D.mkv", title: "Ep 32 Kamen Rider W - 720p - Web", season: 1, episode: 32 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/32.mp4", title: "Ep 32 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 32 }],
"tt1483620:1:33": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E33%20%27Labyrinth%20-%20The%20Girl%20Who%20Hates%20Her%20Name%20%27%20%5B720p%5D.mkv", title: "Ep 33 Kamen Rider W - 720p - Web", season: 1, episode: 33 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/33.mp4", title: "Ep 33 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 33 }],
"tt1483620:1:34": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E34%20%27The%20Rain%20Called%20Monster%20-%20The%20Vow%20to%20the%20Earth%20%27%20%5B720p%5D.mkv", title: "Ep 34 Kamen Rider W - 720p - Web", season: 1, episode: 34 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/34.mp4", title: "Ep 34 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 34 }],
"tt1483620:1:35": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E35%20%27Yesterdays%20-Starting%20to%20Believe%20%27%20%5B720p%5D.mkv", title: "Ep 35 Kamen Rider W - 720p - Web", season: 1, episode: 35 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/35.mp4", title: "Ep 35 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 35 }],
"tt1483620:1:36": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E36%20%27Who%20the%20K%20is%20Shroud%20-%20The%20Big%20Sky%20Wall%20%27%20%5B720p%5D.mkv", title: "Ep 36 Kamen Rider W - 720p - Web", season: 1, episode: 36 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/36.mp4", title: "Ep 36 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 36 }],
"tt1483620:1:37": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E37%20%27Visitor%20X%20-%20The%20Bridge%20of%20Promises%20%27%20%5B720p%5D.mkv", title: "Ep 37 Kamen Rider W - 720p - Web", season: 1, episode: 37 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/37.mp4", title: "Ep 37 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 37 }],
"tt1483620:1:38": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E38%20%27Visitor%20-From%20the%20Start%20to%20Finish%20%27%20%5B720p%5D.mkv", title: "Ep 38 Kamen Rider W - 720p - Web", season: 1, episode: 38 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/38.mp4", title: "Ep 38 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 38 }],
"tt1483620:1:39": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E39%20%27The%20Bonds%20Return%20-%20Goodbye%20to%20the%20E%20%27%20%5B720p%5D.mkv", title: "Ep 39 Kamen Rider W - 720p - Web", season: 1, episode: 39 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/39.mp4", title: "Ep 39 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 39 }],
"tt1483620:1:40": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E40%20%27The%20Eternal%20Partners%20-%20The%20Unbreakable%20Bond%20%27%20%5B720p%5D.mkv", title: "Ep 40 Kamen Rider W - 720p - Web", season: 1, episode: 40 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/40.mp4", title: "Ep 40 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 40 }],
"tt1483620:1:41": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E41%20%27The%20Joker%20-%20The%20Liberation%20of%20the%20Double%20%28Revealed%29%20%27%20%5B720p%5D.mkv", title: "Ep 41 Kamen Rider W - 720p - Web", season: 1, episode: 41 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/41.mp4", title: "Ep 41 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 41 }],
"tt1483620:1:42": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E42%20%27The%20Man%20Who%20Was%20Able%20to%20Capture%20God%20-%20Justice%20Versus%20the%20Devil%20%27%20%5B720p%5D.mkv", title: "Ep 42 Kamen Rider W - 720p - Web", season: 1, episode: 42 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/42.mp4", title: "Ep 42 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 42 }],
"tt1483620:1:43": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E43%20%27The%20Diana%20Bride%20-%20Love%20or%20Death%20%27%20%5B720p%5D.mkv", title: "Ep 43 Kamen Rider W - 720p - Web", season: 1, episode: 43 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/43.mp4", title: "Ep 43 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 43 }],
"tt1483620:1:44": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E44%20%27The%20O%20Chain%20Insanity%20-%20A%20Reckless%20Driver%20%27%20%5B720p%5D.mkv", title: "Ep 44 Kamen Rider W - 720p - Web", season: 1, episode: 44 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/44.mp4", title: "Ep 44 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 44 }],
"tt1483620:1:45": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E45%20%27Who%20Will%20You%20Work%20With%20-%20The%20A%20of%20Heat%20Wave%20%27%20%5B720p%5D.mkv", title: "Ep 45 Kamen Rider W - 720p - Web", season: 1, episode: 45 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/45.mp4", title: "Ep 45 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 45 }],
"tt1483620:1:46": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E46%20%27The%20Fangs%20of%20Victory%20-%20Garuda%20Rises%20%27%20%5B720p%5D.mkv", title: "Ep 46 Kamen Rider W - 720p - Web", season: 1, episode: 46 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/46.mp4", title: "Ep 46 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 46 }],
"tt1483620:1:47": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E47%20%27The%20Abandoned%20%28Closed-Off%29%20Utopia%20-%20The%20Extent%20of%20the%20Day%20%27%20%5B720p%5D.mkv", title: "Ep 47 Kamen Rider W - 720p - Web", season: 1, episode: 47 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/47.mp4", title: "Ep 47 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 47 }],
"tt1483620:1:48": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E48%20%27The%20Final%20Stage%20-%20The%20Way%20to%20Treasure%20%27%20%5B720p%5D.mkv", title: "Ep 48 Kamen Rider W - 720p - Web", season: 1, episode: 48 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/48.mp4", title: "Ep 48 Kamen Rider W-SD-Web-subbed-PTBR-subbed-PTBR", season: 1, episode: 48 }],
"tt1483620:1:49": [{ url: "https://archive.org/download/kamen-rider-w/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20Complete%20Series%20%5B720p%5D/%5BOZC-Live%5DKamen%20Rider%20W%20BD%20Box%20E49%20%27Goodbye%20to%20the%20E%20-%20The%20Last%20Eyes%20that%20Look%20at%20Me%20%27%20%5B720p%5D.mkv", title: "Ep 49 Kamen Rider W - 720p - Web", season: 1, episode: 49 },
{ url: "https://mangas.cloud/tokusatusus/Kamen-Rider/Double/49.mp4", title: "Ep 49 Kamen Rider W-SD-Web-subbed-PTBR", season: 1, episode: 49 }],
};



const seriesSubtitles = {



//Kamen rider Revice legendas

"tt14893284:1:1": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2001%20%5B6290785B%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 1" },
//space for new language
],
"tt14893284:1:2": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2002%20%5BCE9072FE%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 2" },
//space for new language
],
"tt14893284:1:3": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2003%20%5B38989F00%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 3" },
//space for new language
],
"tt14893284:1:4": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2004%20%5BBEAB0494%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 4" },
//space for new language
],
"tt14893284:1:5": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2005%20%5B6999FAA9%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 5" },
//space for new language
],
"tt14893284:1:6": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2006%20%5B246AB939%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 6" },
//space for new language
],
"tt14893284:1:7": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2007%20%5B662A74AC%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 7" },
//space for new language
],
"tt14893284:1:8": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2008%20%5BD1A69037%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 8" },
//space for new language
],
"tt14893284:1:9": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2009%20%5B6A202800%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 9" },
//space for new language
],
"tt14893284:1:10": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2010%20%5B17204838%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 10" },
//space for new language
],
"tt14893284:1:11": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2011%20%5B80AD1CB7%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 11" },
//space for new language
],
"tt14893284:1:12": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2012%20%5B501FB873%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 12" },
//space for new language
],
"tt14893284:1:13": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2013%20%5BDD8B822D%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 13" },
//space for new language
],
"tt14893284:1:14": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2014%20%5B5F22CAFF%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 14" },
//space for new language
],
"tt14893284:1:15": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2015%20%5B35BD74F6%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 15" },
//space for new language
],
"tt14893284:1:16": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2016%20%5BBF9B3105%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 16" },
//space for new language
],
"tt14893284:1:17": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2017%20%5BB059D5A2%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 17" },
//space for new language
],
"tt14893284:1:18": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2018%20%5BB90C02BE%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 18" },
//space for new language
],
"tt14893284:1:19": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2019%20%5B345E40B6%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 19" },
//space for new language
],
"tt14893284:1:20": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2020%20%5B5DBC8C1A%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 20" },
//space for new language
],
"tt14893284:1:21": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2021%20%5B1B864A30.srt", lang: "Português BR [Japa Subs]", label: "Episódio 21" },
//space for new language
],
"tt14893284:1:22": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2022%20%5B3C749CE1%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 22" },
//space for new language
],
"tt14893284:1:23": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2023%20%5BA10A1C8F%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 23" },
//space for new language
],
"tt14893284:1:24": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2024%20%5BB693C1DB%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 24" },
//space for new language
],
"tt14893284:1:25": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2025%20%5BE64DAF1D%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 25" },
//space for new language
],
"tt14893284:1:26": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2026%20%5BA7DD3A80%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 26" },
//space for new language
],
"tt14893284:1:27": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2027%20%5B59336DB2%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 27" },
//space for new language
],
"tt14893284:1:28": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2028%20%5BFA52A9A5%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 28" },
//space for new language
],
"tt14893284:1:29": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2029%20%5BC3EA1F7D%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 29" },
//space for new language
],
"tt14893284:1:30": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2030%20%5BEBF8E69C%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 30" },
//space for new language
],
"tt14893284:1:31": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2031%20%5B88AA8A34%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 31" },
//space for new language
],
"tt14893284:1:32": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2032%20%5BCA902D67%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 32" },
//space for new language
],
"tt14893284:1:33": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2033%20%5B54AC1966%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 33" },
//space for new language
],
"tt14893284:1:34": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2034%20%5BB1950D46%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 34" },
//space for new language
],
"tt14893284:1:35": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2035%20%5B8784E0D0%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 35" },
//space for new language
],
"tt14893284:1:36": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2036%20%5BD9E41FC1%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 36" },
//space for new language
],
"tt14893284:1:37": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2037%20%5B509E0D2F%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 37" },
//space for new language
],
"tt14893284:1:38": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2038%20%5BF62A2C2C%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 38" },
//space for new language
],
"tt14893284:1:39": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2039%20%5B82AFBF9E%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 39" },
//space for new language
],
"tt14893284:1:40": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2040%20%5B55FE1F45%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 40" },
//space for new language
],
"tt14893284:1:41": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2041%20%5B830501B2%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 41" },
//space for new language
],
"tt14893284:1:42": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2042%20%5B146B3D68%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 42" },
//space for new language
],
"tt14893284:1:43": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2043%20%5B47AC1664%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 43" },
//space for new language
],
"tt14893284:1:44": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2044%20%5B3E269BF5%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 44" },
//space for new language
],
"tt14893284:1:45": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2045%20%5BB60FBD8C%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 45" },
//space for new language
],
"tt14893284:1:46": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2046%20%5B009A2C1A%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 46" },
//space for new language
],
"tt14893284:1:47": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2047%20%5BEC7269BA%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 47" },
//space for new language
],
"tt14893284:1:48": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2048%20%5B87A8AF7D%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 48" },
//space for new language
],
"tt14893284:1:49": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2049%20%5B1ED361AA%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 49" },
//space for new language
],
"tt14893284:1:50": [
{ url: "https://archive.org/download/kamen-rider-revice-legendas-ptbr/%5BJapaSubs%5D%20%5BHikounin-Raws%5D%20Kamen%20Rider%20Revice%20-%2050%20%5BF0024CAB%5D.srt", lang: "Português BR [Japa Subs]", label: "Episódio 50" },
//space for new language
],

//Kamen rider Black sun legendas

        "tt14377480:1:1": [
        { url: "https://archive.org/download/kamen.-rider.-black.-sun.-s-01-e-01.1080p.-amzn.-web-dl.-ddp-5.1.-h.-264-pi-a/Kamen.Rider.BLACK.SUN.S01E01.1080p.AMZN.WEB-DL.DDP5.1.H.264-PiA.srt", lang: "por", label: "Português" },
        //space for new language
        ],

        "tt14377480:1:2": [
        { url: "https://archive.org/download/kamen.-rider.-black.-sun.-s-01-e-01.1080p.-amzn.-web-dl.-ddp-5.1.-h.-264-pi-a/Kamen.Rider.BLACK.SUN.S01E02.1080p.AMZN.WEB-DL.DDP5.1.H.264-PiA.srt", lang: "por", label: "Português" },
        //space for new language
        ],
        "tt14377480:1:3": [
        { url: "https://archive.org/download/kamen.-rider.-black.-sun.-s-01-e-01.1080p.-amzn.-web-dl.-ddp-5.1.-h.-264-pi-a/Kamen.Rider.BLACK.SUN.S01E03.1080p.AMZN.WEB-DL.DDP5.1.H.264-PiA.srt", lang: "por", label: "Português" },
        //space for new language
        ],
        "tt14377480:1:4": [
        { url: "https://archive.org/download/kamen.-rider.-black.-sun.-s-01-e-01.1080p.-amzn.-web-dl.-ddp-5.1.-h.-264-pi-a/Kamen.Rider.BLACK.SUN.S01E04.1080p.AMZN.WEB-DL.DDP5.1.H.264-PiA.srt", lang: "por", label: "Português" },
        //space for new language
        ],
        "tt14377480:1:5": [
        { url: "https://archive.org/download/kamen.-rider.-black.-sun.-s-01-e-01.1080p.-amzn.-web-dl.-ddp-5.1.-h.-264-pi-a/Kamen.Rider.BLACK.SUN.S01E05.1080p.AMZN.WEB-DL.DDP5.1.H.264-PiA.srt", lang: "por", label: "Português" },
        //space for new language
        ],
        "tt14377480:1:6": [
        { url: "https://archive.org/download/kamen.-rider.-black.-sun.-s-01-e-01.1080p.-amzn.-web-dl.-ddp-5.1.-h.-264-pi-a/Kamen.Rider.BLACK.SUN.S01E06.1080p.AMZN.WEB-DL.DDP5.1.H.264-PiA.srt", lang: "por", label: "Português" },
        //space for new language
        ],
        "tt14377480:1:7": [
        { url: "https://archive.org/download/kamen.-rider.-black.-sun.-s-01-e-01.1080p.-amzn.-web-dl.-ddp-5.1.-h.-264-pi-a/Kamen.Rider.BLACK.SUN.S01E07.1080p.AMZN.WEB-DL.DDP5.1.H.264-PiA.srt", lang: "por", label: "Português" },
        //space for new language
        ],
        "tt14377480:1:8": [
        { url: "https://archive.org/download/kamen.-rider.-black.-sun.-s-01-e-01.1080p.-amzn.-web-dl.-ddp-5.1.-h.-264-pi-a/Kamen.Rider.BLACK.SUN.S01E08.1080p.AMZN.WEB-DL.DDP5.1.H.264-PiA.srt", lang: "por", label: "Português" },
        //space for new language
        ],
        "tt14377480:1:9": [
        { url: "https://archive.org/download/kamen.-rider.-black.-sun.-s-01-e-01.1080p.-amzn.-web-dl.-ddp-5.1.-h.-264-pi-a/Kamen.Rider.BLACK.SUN.S01E09.1080p.AMZN.WEB-DL.DDP5.1.H.264-PiA.srt", lang: "por", label: "Português" },
        //space for new language
        ],
        "tt14377480:1:10": [
        { url: "https://archive.org/download/kamen.-rider.-black.-sun.-s-01-e-01.1080p.-amzn.-web-dl.-ddp-5.1.-h.-264-pi-a/Kamen.Rider.BLACK.SUN.S01E10.1080p.AMZN.WEB-DL.DDP5.1.H.264-PiA.srt", lang: "por", label: "Português" },
        //space for new language
        ],







//Kamen rider build legendas
   "tt6982472:1:1": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2001%20%5B0FA14DE4%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:2": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2002%20%5BB798DDC7%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:3": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2003%20%5B5F1AEAFE%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:4": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BOver-Time%5D%20Kamen%20Rider%20Build%20-%2004%20%5B77AF0F25%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:5": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2005%20%5BBC49D87E%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:6": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2006%20%5BDC6F6B0A%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:7": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2007%20%5B8360F7AE%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:8": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2008%20%5B4F169893%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:9": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2009%20%5B0112A9DA%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:10": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2010%20%5B24D4A196%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:11": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2011%20%5BB7CBEBBE%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:12": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2012%20%5BA703F3A6%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:13": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2013%20%5BD346D971%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:14": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2014%20%5B46C04CF7%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:15": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2015%20%5B9B7D7F08%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:16": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2016%20%5B985E00A1%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:17": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2017%20%5BF296D955%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:18": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2018%20%5BA3690253%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:19": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2019%20%5B6FF930D5%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:20": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2020%20%5B2E68582E%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:21": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2021%20%5B0523E06A%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:22": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2022%20%5B17FAE89C%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:23": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2023%20%5B87802B2C%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:24": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2024%20%5B3C6B64EF%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:25": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BOver-Time%5D%20Kamen%20Rider%20Build%20-%2025%20%5B3CED9924%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],

    "tt6982472:1:26": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2026%20%5B25E2D906%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:27": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2027%20%5B00F405C1%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:28": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2028%20%5B79E8F26E%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:29": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2029%20%5B6D30F0E9%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:30": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2030%20%5BD5708810%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:31": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2031%20%5BFCB8A4FA%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:32": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2032%20%5BA93A10BF%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:33": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2033%20%5BDEF52D4A%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:34": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2034%20%5B568F9BB9%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:35": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2035%20%5BBFB86665%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:36": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2036%20%5B7E461CA4%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:37": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2037%20%5BABD1E547%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:38": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BOver-Time%5D%20Kamen%20Rider%20Build%20-%2038%20%5B9977769A%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:39": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2039%20%5B0FD1C01A%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:40": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2040%20%5B11A9CEC4%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:41": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2041%20%5B24DB9CCE%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:42": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2042%20%5BD65E7490%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:43": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2043%20%5B5F9004AF%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:44": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2044%20%5B1AE2EE14%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:45": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2045%20%5B7D869AF4%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:46": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2046%20%5B2920FF52%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:47": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2047%20%5B24245BB1%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:48": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2048%20%5B1AAE6A32%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],
    "tt6982472:1:49": [
        { url: "https://archive.org/download/thisfilehasnosubs-kamen-rider-build-05-bc-49-d-87-e/%5BTHISFILEHASNOSUBS%5D%20Kamen%20Rider%20Build%20-%2049%20%5B2210EE7C%5D.srt", lang: "Portugues BR -Toku Minas-", label: "Portugues" },
        //space for new language
    ],




///kamen rider W legendas


"tt1483620:1:1": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_01.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:2": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_02.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:3": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_03.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:4": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_04.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:5": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_05.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:6": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_06.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:7": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_07.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:8": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_08.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:9": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_09.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:10": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_10.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:11": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_11.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:12": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_12.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:13": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_13.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:14": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_14.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:15": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_15.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:16": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_16.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:17": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_17.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:18": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_18.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:19": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_19.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:20": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_20.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:21": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_21.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:22": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_22.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:23": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_23.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:24": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_24.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:25": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_25.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:26": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_26.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:27": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_27.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:28": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_28.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:29": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_29.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:30": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_30.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:31": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_31.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:32": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_32.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:33": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_33.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:34": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_34.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:35": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_35.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:36": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_36.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:37": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_37.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:38": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_38.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:39": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_39.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:40": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_40.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:41": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_41.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:42": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_42.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:43": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_43.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:44": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_44.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:45": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_45.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:46": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_46.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:47": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_47.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:48": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_48.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],
"tt1483620:1:49": [ { url: "https://archive.org/download/kamenriderwlegendasptbr/kr_w_port_49.srt", lang: "Portugues BR", label: "Portugues" },], //space for new language ],



};





module.exports = { catalogs, seriesStreams, seriesSubtitles };

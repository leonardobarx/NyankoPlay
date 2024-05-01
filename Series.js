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
"tt6982472:1:1": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E01%20%27These%20Guys%20Are%20A%20Best%20Match%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 01 Kamen Rider Build JP", season: 1, episode: 1 }],
"tt6982472:1:2": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E02%20%27Innocent%20Runaway%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 02 Kamen Rider Build JP", season: 1, episode: 2 }],
"tt6982472:1:3": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E03%20%27The%20Borderline%20of%20Heroism%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 03 Kamen Rider Build JP", season: 1, episode: 3 }],
"tt6982472:1:4": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E04%20%27When%20There%27s%20Zero%20Testimony%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 04 Kamen Rider Build JP", season: 1, episode: 4 }],
"tt6982472:1:5": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E05%20%27Unsteady%20Identity%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 05 Kamen Rider Build JP", season: 1, episode: 5 }],
"tt6982472:1:6": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E06%20%27Furious%20Moonsault%27%20%5B1080p%5D.mp4", title: "Ep 06 Kamen Rider Build JP", season: 1, episode: 6 }],
"tt6982472:1:7": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E07%20%27The%20Devil%27s%20Scientist%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 07 Kamen Rider Build JP", season: 1, episode: 7 }],
"tt6982472:1:8": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E08%20%27What%20The%20Memories%20Tell%20You%27%20%5B1080p%5D.mp4", title: "Ep 08 Kamen Rider Build JP", season: 1, episode: 8 }],
"tt6982472:1:9": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E09%20%27The%20Trap%20of%20Project%20Build%27%20%5B1080p%5D.mp4", title: "Ep 09 Kamen Rider Build JP", season: 1, episode: 9 }],
"tt6982472:1:10": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E10%20%27Technology%20of%20Destruction%27%20%5B1080p%5D.mp4", title: "Ep 10 Kamen Rider Build JP", season: 1, episode: 10 }],
"tt6982472:1:11": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E12%20%27The%20Scent%20of%20Conspiracy%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 11 Kamen Rider Build JP", season: 1, episode: 11 }],
"tt6982472:1:12": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E12%20%27The%20Scent%20of%20Conspiracy%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 12 Kamen Rider Build JP", season: 1, episode: 12 }],
"tt6982472:1:13": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E13%20%27Who%20Removes%20the%20Veil%27%20%5B1080p%5D.mp4", title: "Ep 13 Kamen Rider Build JP", season: 1, episode: 13 }],
"tt6982472:1:14": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E14%20%27The%20False%20Kamen%20Rider%27%20%5B1080p%5D.mp4", title: "Ep 14 Kamen Rider Build JP", season: 1, episode: 14 }],
"tt6982472:1:15": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E15%20%27The%20Judgement%20of%20Kiryuu%20Sento%21%27%20%5B1080p%5D.mp4", title: "Ep 15 Kamen Rider Build JP", season: 1, episode: 15 }],
"tt6982472:1:16": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E16%20%27The%20Weaponized%20Hero%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 16 Kamen Rider Build JP", season: 1, episode: 16 }],
"tt6982472:1:17": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E17%20%27The%20Rider%20War%20Outbreak%27%20%5B1080p%5D.mp4", title: "Ep 17 Kamen Rider Build JP", season: 1, episode: 17 }],
"tt6982472:1:18": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E18%20%27The%20Golden%20Soldier%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 18 Kamen Rider Build JP", season: 1, episode: 18 }],
"tt6982472:1:19": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E19%20%27The%20Forbidden%20Item%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 19 Kamen Rider Build JP", season: 1, episode: 19 }],
"tt6982472:1:20": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E20%20%27Devil%20Trigger%27%20%5B1080p%5D.mp4", title: "Ep 20 Kamen Rider Build JP", season: 1, episode: 20 }],
"tt6982472:1:21": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E21%20%27The%20Unstoppable%20Hazard%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 21 Kamen Rider Build JP", season: 1, episode: 21 }],
"tt6982472:1:22": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E22%20%27Tearful%20Victory%27%20%5B1080p%5D.mp4", title: "Ep 22 Kamen Rider Build JP", season: 1, episode: 22 }],
"tt6982472:1:23": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E23%20%27The%20Western%20Phantom%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 23 Kamen Rider Build JP", season: 1, episode: 23 }],
"tt6982472:1:24": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E24%20%27The%20Man%20Called%20Rogue%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 24 Kamen Rider Build JP", season: 1, episode: 24 }],
"tt6982472:1:25": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E25%20%27An%20Idol%20Awakens%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 25 Kamen Rider Build JP", season: 1, episode: 25 }],
"tt6982472:1:26": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E26%20%27Treacherous%20Deathmatch%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 26 Kamen Rider Build JP", season: 1, episode: 26 }],
"tt6982472:1:27": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E27%20%27The%20Hero%27s%20Counterattack%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 27 Kamen Rider Build JP", season: 1, episode: 27 }],
"tt6982472:1:28": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E28%20%27The%20Genius%20Comes%20On%20A%20Tank%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 28 Kamen Rider Build JP", season: 1, episode: 28 }],
"tt6982472:1:29": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E29%20%27The%20Bell%20Tolls%2C%20The%20Curtain%20Rises%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 29 Kamen Rider Build JP", season: 1, episode: 29 }],
"tt6982472:1:30": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E30%20%27The%20Truth%20of%20the%20Pandora%27s%20Box%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 30 Kamen Rider Build JP", season: 1, episode: 30 }],
"tt6982472:1:31": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E31%20%27Surging%20Magma%21%27%20%5B1080p%5D.mp4", title: "Ep 31 Kamen Rider Build JP", season: 1, episode: 31 }],
"tt6982472:1:32": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E32%20%27A%20Pre-Programmed%20Tragedy%27%20%5B1080p%5D.mp4", title: "Ep 32 Kamen Rider Build JP", season: 1, episode: 32 }],
"tt6982472:1:33": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E33%20%27Evol%2C%20the%20Ultimate%20Weapon%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 33 Kamen Rider Build JP", season: 1, episode: 33 }],
"tt6982472:1:34": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E34%20%27The%20Best%20Match%2C%20Separated%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 34 Kamen Rider Build JP", season: 1, episode: 34 }],
"tt6982472:1:35": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E35%20%27Tower%20of%20Destruction%27%20%5B1080p%5D.mp4", title: "Ep 35 Kamen Rider Build JP", season: 1, episode: 35 }],
"tt6982472:1:36": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E36%20%27Evolt%20Hunts%20Planets%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 36 Kamen Rider Build JP", season: 1, episode: 36 }],
"tt6982472:1:37": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E37%20%27The%20Ultimate%20Phase%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 37 Kamen Rider Build JP", season: 1, episode: 37 }],
"tt6982472:1:38": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E38%20%27Mad%20World%27%20%5B1080p%5D.mp4", title: "Ep 38 Kamen Rider Build JP", season: 1, episode: 38 }],
"tt6982472:1:39": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E39%20%27The%20Unstoppable%20Genius%27%20%5B1080p%5D.mp4", title: "Ep 39 Kamen Rider Build JP", season: 1, episode: 39 }], 
"tt6982472:1:40": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E40%20%27Revolution%20of%20the%20Apocalypse%27%20%5B1080p%5D.mp4", title: "Ep 40 Kamen Rider Build JP", season: 1, episode: 40 }],
"tt6982472:1:41": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E41%20%27The%20Truth%20Behind%20Best%20Matches%27%20%5B1080p%5D.mp4", title: "Ep 41 Kamen Rider Build JP", season: 1, episode: 41 }],
"tt6982472:1:42": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E42%20%27Legacy%20of%20Doubt%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 42 Kamen Rider Build JP", season: 1, episode: 42 }],
"tt6982472:1:43": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E43%20%27The%20Other%20Build%27%20%5B1080p%5D.mp4", title: "Ep 43 Kamen Rider Build JP", season: 1, episode: 43 }],
"tt6982472:1:44": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E44%20%27The%20End%20of%20Evolt%27%20%5B1080p%5D.mp4", title: "Ep 44 Kamen Rider Build JP", season: 1, episode: 44 }],
"tt6982472:1:45": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E45%20%27Hope%27s%20Scientist%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 45 Kamen Rider Build JP", season: 1, episode: 45 }],
"tt6982472:1:46": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E46%20%27An%20Oath%20To%20Be%20The%20One%27%20%5B1080p%5D.mp4", title: "Ep 46 Kamen Rider Build JP", season: 1, episode: 46 }],
"tt6982472:1:47": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E47%20%27Subzero%20Flame%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 47 Kamen Rider Build JP", season: 1, episode: 47 }],
"tt6982472:1:48": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E48%20%27To%20A%20World%20of%20Love%20and%20Peace%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 48 Kamen Rider Build JP", season: 1, episode: 48 }],
"tt6982472:1:49": [{ url: "https://archive.org/download/kamen-rider-build/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20Complete%20Series%20%5B1080p%5D/%5BOZC-Live%5DKamen%20Rider%20Build%20BD%20Box%20E49%20%27The%20World%20Build%20Created%27%20%5B1080p%5D%5Bv2%5D.mp4", title: "Ep 49 Kamen Rider Build JP", season: 1, episode: 49 }]

};



const seriesSubtitles = {

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
}

module.exports = { catalogs, seriesStreams, seriesSubtitles };

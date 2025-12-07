let seasons = [
    { season: 1, episodes: 9 },
    { season: 2, episodes: 16 },
    { season: 3, episodes: 25 },
    { season: 4, episodes: 17 },
    { season: 5, episodes: 24 },
    { season: 6, episodes: 18 },
    { season: 7, episodes: 22 },
    { season: 8, episodes: 24 },
    { season: 9, episodes: 22 },
    { season: 10, episodes: 24 },
    { season: 11, episodes: 24 },
    { season: 12, episodes: 24 },
    { season: 13, episodes: 24 },
    { season: 14, episodes: 24 },
    { season: 15, episodes: 25 },
    { season: 16, episodes: 21 },
    { season: 17, episodes: 17 },
    { season: 18, episodes: 20 },
    { season: 19, episodes: 20 },
    { season: 20, episodes: 20 }
];


let seasonslist = document.querySelector(".seasonslist");

for (let i = 0; i < seasons.length; i++) {
   
    seasonslist.innerHTML += `
        <div class="seasontab">
            <div class="seatxt">
                <h4>Season ${seasons[i].season}</h4>
                <span>${seasons[i].episodes} Episodes</span>
            </div>
            <img src="img/Vector.svg" alt="">
        </div>
    `;
}


let cast = [
    {
        name: "Meredith Grey, M.D.",
        title: "General Surgeon",
        img: "img/mer.png",
        rotate: "-7.253deg"
    },
    {
        name: "Izzie Stevens, M.D.",
        title: "Surgical Resident",
        img: "img/izz.png",
        rotate: "6.74deg"
    },
    {
        name: "George O’malley, M.D.",
        title: "Surgical Resident",
        img: "img/geo.png",
        rotate: "-6.534deg"
    },
    {
        name: "Mark Sloan, M.D.",
        title: "Head of plastic surgery",
        img: "img/mar.png",
        rotate: "5.671deg"
    },
    {
        name: "Cristina Yang, M.D.",
        title: "Chief Medical Officer",
        img: "img/yang.png",
        rotate: "-8.518deg"
    },
    {
        name: "Derek Shepherd, M.D.",
        title: "Neurosurgeon",
        img: "img/shep.png",
        rotate: "8.209deg"
    }
];


let castlist = document.querySelector(".castlist");

for (let i = 0; i < cast.length; i++) {
    castlist.innerHTML += `
        <div class="card" style="transform: rotate(${cast[i].rotate});">
            <div class="cardcont">
                <img src="img/logo.png" alt="" class="logo">
                <img src="${cast[i].img}" alt="${cast[i].name}">
                <div class="name">
                    <h5>${cast[i].name}</h5>
                    <h6>${cast[i].title}</h6>
                </div>
            </div>
        </div>
    `;
}

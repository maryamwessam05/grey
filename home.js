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
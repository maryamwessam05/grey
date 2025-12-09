window.addEventListener("click", () => {
    const audio = document.getElementById("bg");
    audio.muted = false;
    audio.play();
});

let nav = [
    "Home",
    "About",
    "Cast",
    "Watch"
]


let images = ["img/1.png", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

let heroImg = document.getElementById("heroImage");

let randomImage = images[Math.floor(Math.random() * images.length)];

heroImg.src = randomImage;

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
<div class="card" onclick="openCast(${i})" style="transform: rotate(${cast[i].rotate});">
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


function openCast(index) {

    localStorage.setItem("selectedCast", JSON.stringify(characters[index]));

    window.location.href = "char.html";
}


function increase(numid){
    let num = document.getElementById(numid).innerHTML;
    document.getElementById(numid).innerHTML = ++num;
   };


   function decrease(numid){
    let num = document.getElementById(numid).innerHTML;
    if(num != 0){

        document.getElementById(numid).innerHTML = --num;
    }

   };




let merch = [
    {
        offerimg : "img/Post-it Grey’s Anatomy Crewneck Sweatshirt.jpeg",
        title: "Grey's anatomy sweater",
        desc:"Warm and cozy sweater for winter and going out",
        price: "299 EGP"
    },
      {
        offerimg : "img/Doctor Nurse Printed Ladies Cosmetic Bag, Letter Cartoon Character Pattern Toiletry Bag, Portable Pencil Storage Bag, Party Gift Bag.jpeg",
        title: "Grey's anatomy bag",
        desc:"An efficient bag to carry your stuff and be easy to carry",
        price: "599 EGP"
    },
      {
        offerimg : "img/Greys Anatomy, Trust Me I'm a Surgeon, Tote Bag, Shopping Tote Bag, Reusable Tote Bag.jpeg",
        title: "Grey's anatomy tote",
        desc:"An efficient and stylish tote to carry your stuff",
        price: "1,299 EGP"
    }
   ]

   for ( i = 0; i < merch.length; i++){
    document.getElementById("merch").innerHTML +=
    `
    <div class="merchsingle">
        <img class= "merchimg" src="${merch[i].offerimg}" alt="">
        <div class="mercont">

            <div class="row2">
                <h3>${merch[i].title}</h3>
                <p>${merch[i].desc}</p>
            </div>

            <div class="row3">
                <h4>${merch[i].price}</h4>
                <div class="pricecounter">
                    <button class="remove" onclick="decrease('number${i}')"><img src="img/-.svg" alt=""></button>
                    <span id="number${i}">0</span>
                    <button class="add" onclick="increase('number${i}')"><img src="img/+.svg" alt=""></button>
                </div>
            </div>
        </div>
    </div>

    `};
document.getElementById("footer").innerHTML +=
`
 <div class="footcontent">
      <div class="footcol">
          <h5>GREYS ANATOMY</h5>
          <p>Your ultimate destination for the best deals and discounts in Egypt.</p>
          <img src="img/footicons.svg" alt="">
      </div>
      <div class="footcol">
          <h5>Quick Links</h5>
          <div class="links">
          <a href="">About Us</a>
          <a href="">Stories</a>
         
          </div>
      </div>
       <div class="footcol">
          <h5>Support</h5>
          <div class="links">
          <a href="">Help Center</a>
          <a href="">Contact Us</a>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
          </div>
      </div>

       <div class="footcol">
          <h5>Contact Info</h5>
          <div class="icontxt">
              <img src="img/locfoot.svg" alt="">
              <p>Nasr City, Cairo, Egypt</p>
          </div>
           <div class="icontxt">
              <img src="img/call.svg" alt="">
              <p>+20 2 2345 6789</p>
          </div>
           <div class="icontxt">
              <img src="img/mai.svg" alt="">
              <p>info@wafarly.org.eg</p>
          </div>
      </div>
  </div>
  <span>© 2024 EgyptDeals. All rights reserved. Made with Love in Egypt</span>


`;





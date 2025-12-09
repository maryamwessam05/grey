window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, 3000);
  });







let nav = [
    {
        title : "Home",
        link: "index.html"
    },
    {
        title : "About",
        link: "#about"
    },
    {
        title : "Cast",
        link: "#cast"
    },
    {
        title : "Merch",
        link: "#merchsec"
    },
]

let navbar = document.getElementById("navbar");

for ( let i=0 ; i < nav.length; i++){

    navbar.innerHTML += `
                <li>
                    <a href="${nav[i].link}">${nav[i].title}</a>
                </li>
    `
}
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
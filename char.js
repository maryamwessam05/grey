window.addEventListener("click", () => {
    const audio = document.getElementById("bg");
    audio.muted = false;
    audio.play();
});





let chosenCast = JSON.parse(localStorage.getItem("selectedCast"));


document.getElementById("character").innerHTML = `

    <div class="row1">
        <h3>Character Info Chart</h3>
        <img src="img/logos.png" alt="">
    </div>

    <div class="row2">
        <div class="image">
            <img src="${chosenCast.image}" alt="${chosenCast.name}">
            <div class="watch">WATCH NOW</div>
        </div>

        <div class="text">

            <div class="pair">
                <h3>Character Name</h3>
                <h4>${chosenCast.name}</h4>
            </div>

            <div class="pair">
                <h3>Actor</h3>
                <h4>${chosenCast.actor}</h4>
            </div>

            <div class="pair">
                <h3>Bio</h3>
                <p>${chosenCast.bio}</p>
            </div>

            <div class="sticky">
                <h3>Special Traits</h3>
                <h5>
                    ${chosenCast.traits.map(t => `- ${t}`).join("<br>")}
                </h5>
            </div>

        </div>
    </div>

`;





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
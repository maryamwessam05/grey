let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
updateCart();


function updateCart() {
    document.getElementById("counter").innerHTML = cartItems.length;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}



function increase(numid, merchIndex) {
    let num = Number(document.getElementById(numid).innerHTML);
    num++;
    document.getElementById(numid).innerHTML = num;

    // Check if item is already in cart
    let item = cartItems.find(x => x.id === merchIndex);

    if (!item) {
        cartItems.push({ id: merchIndex, quantity: 1 });
    } else {
        item.quantity = num;
    }

    updateCart();
    renderCartPage();
}




function decrease(numid, merchIndex){
    let num = Number(document.getElementById(numid).innerHTML);

    if (num > 0) {
        num--;
        document.getElementById(numid).innerHTML = num;

        if (num === 0) {
            cartItems = cartItems.filter(id => id !== merchIndex);
            updateCart();
        }
    }
}






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

            <div class="row2merch">
                <h3>${merch[i].title}</h3>
                <p>${merch[i].desc}</p>
            </div>

            <div class="row3">
                <h4>${merch[i].price}</h4>
                <div class="pricecounter">
                    <button class="remove" onclick="decrease('number${i}', ${i})"><img src="img/-.svg" alt=""></button>
                    <span id="number${i}">0</span>
                    <button class="add" onclick="increase('number${i}', ${i})"><img src="img/+.svg" alt=""></button>
                </div>
            </div>
        </div>
    </div>

    `};